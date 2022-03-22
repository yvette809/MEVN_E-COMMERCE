const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default:0
    },
    countInStock: {
    type:Number,
    required: true,
    default:0
    }
},
    { timestamps: true }
)

const ProductModel = mongoose.model('product', ProductSchema)

module.exports = ProductModel