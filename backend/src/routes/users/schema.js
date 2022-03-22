const mongoose = require('mongoose')
const v = require("validator");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "please include a valid email"],
        unique: true,
        validate: {
            validator: async (value) => {
                if (!v.isEmail(value)) {
                    throw new Error("Email is invalid");
                }
            },
        },
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }

}, {
    timestamps: true
}
)

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel