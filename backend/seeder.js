const mongoose = require("mongoose");
const express = require("express")
const server = express()
const dotenv = require("dotenv");
const products = require("./src/data/products.js")
const users = require("./src/data/users.js");
const UserModel = require("./src/routes/users/schema.js");
const productModel = require("./src/routes/products/schema.js");
//const orderModel = require("./src/routes/order/schema.js");


dotenv.config();

const port = process.env.PORT || 4070

mongoose
  .connect(`mongodb+srv://evebabe:ub021299@cluster0.tfa8c.mongodb.net/test`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    server.listen(port, () => {
      console.log(`server running on port ${port}`);
    })
  )
  .catch((error) => console.log(error));

const importData = async () => {
  try {
    // we remove these ones if they are already in the database
    //await orderModel.deleteMany();
    await productModel.deleteMany();
    await UserModel.deleteMany();

    const createdUsers = await UserModel.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await productModel.insertMany(sampleProducts);
    console.log("data imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await orderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    console.log("data destroyed");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};



if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}