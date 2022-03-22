const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const userRouter = require('./src/routes/users/index')
const productRouter = require('./src/routes/products/index')
const orderRouter = require('./src/routes/orders/index')
const { badRequestHandler,
    notFoundHandler,
    genericErrorHandler, } = require('./src/middleware/errorHandler')

const app = express()
app.use(cors())


//init middleware
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))

//define routes
app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/orders", orderRouter)

// Error handler middleware
app.use(badRequestHandler);
app.use(notFoundHandler);
app.use(genericErrorHandler);



const PORT = process.env.PORT || 4001
const mongo_uri = process.env.MONGO_URI

mongoose
    .connect(mongo_uri
        ,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        })
    )
    .catch((error) => console.log(error));

