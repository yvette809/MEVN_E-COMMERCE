
const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "product",
                },
            },
        ],
        taxPrice: {
            type: Number,
           
            default: 0.0,
          },
          totalPrice: {
            type: Number,
           
            default: 0.0,
          },

    },
    {
        timestamps: true,
    }
);

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;