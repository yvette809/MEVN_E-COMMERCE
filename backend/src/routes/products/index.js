const express = require('express')
const productRouter = express.Router()
const ProductModel = require("./Schema")
const { auth, admin } = require("../../middleware/authMidleware")
const { default: mongoose } = require('mongoose')

//gett all products
// productRouter.get("/", async (req, res, next) => {
//     try {
//         let products = await ProductModel.find(req.query)
//         if (!products) {
//             next(error);
//             res.status(404).json({ msg: 'products not found' })
//         }
//         res.json( products )

//     } catch (error) {
//         next(error)

//     }

// })
//get all products with pagination
productRouter.get("/", async (req, res, next) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
  
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
  
    const count = await ProductModel.countDocuments({ ...keyword });
    const products = await ProductModel.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
  
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  });

// create a new product
productRouter.post("/", auth, admin, async (req, res, next) => {

    const { name, image, description, price, countInStock } = req.body

    // I want to avoid creating products wit duplicate names

    const product = await ProductModel.findOne({ name })

    if (product) {
        res.status(400).json({ msg: "product has already been created" })
    }


    const newProduct = new ProductModel({
        user: req.user._id,
        name,
        image,
        description,
        price,
        countInStock

    })
    await newProduct.save()
    res.status(201).send(newProduct)

})

// get products by id
productRouter.get("/:id", async (req, res, next) => {
    try {
        let product = await ProductModel.findById(req.params.id)
        if (!product) {
            res.status(404).json({ msg: `product with id${req.params.id} not found` })
        }
        res.send(product)

    } catch (error) {
        next(error)
    }
})

// // get products of logged in user

// productRouter.get("/users/me", auth, async (req, res, next) => {
//     try {
//         let products = await ProductModel.find({ user: req.user._id })
//         if (!products) {
//             res.status(404).json({ msg: "no products found for this user" })
//         }
//         res.send(products)

//     } catch (error) {
//         next(error)
//     }


// })

    // delete
    / delete products
productRouter.delete("/:id", auth, admin, async (req, res, next) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        if (product) {
            await product.remove();
            res.send("product removed");
        } else {
            const error = new Error(`product with id ${req.params.id} not found`);
            error.httpStatusCode = 404;
            next(error);
        }
    } catch (error) {
        next(error);
    }
});

// @desc    Update a product
productRouter.put("/:id", auth, admin, async (req, res, next) => {
    const {
        name,
        price,
        description,
        image,
        countInStock,
    } = req.body;

    try {
        const product = await ProductModel.findById(req.params.id);

        if (product) {
            product.name = name;
            product.price = price;
            product.description = description;
            product.image = image;
            product.countInStock = countInStock;

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            const error = new Error(`product with id ${req.params.id} not found`);
            error.httpStatusCode = 404;
            next(error);
        }
    } catch (error) {
        next(error);
    }
});






module.exports = productRouter