
const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        orderItems: [
            {


                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "product",
                },
            },
        ],


    },
    {
        timestamps: true,
    }
);

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;