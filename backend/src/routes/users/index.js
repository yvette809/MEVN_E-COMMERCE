const express = require('express')
const userRouter = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('./schema')

//Register a user

userRouter.post("/register", async (req, res, next) => {

    const { name, email, password, isAdmin } = req.body;
    try {
        // see if user exists
        let user = await UserModel.findOne({ email });
        if (user) {
            res.status(400).json({ msg: "user already exists" });
        } else {

            //hash password
            const salt = await bcrypt.genSalt(10)
            const harsedPassword = await bcrypt.hash(password, salt)

            // create user and replace user's password with the harsdpassword

            user = new UserModel({
                name,
                email,
                isAdmin,
                password: harsedPassword
            });

            await user.save()

            if (user) {
                res.json({
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id)
                })
            }


        }
    } catch (error) {
        next(error);
    }
})


//login a user
userRouter.post("/login", async (req, res, next) => {
    const { email, password } = req.body
    //check for user email
    const user = await UserModel.findOne({ email })
    // if the user is found, compare its password from req.body with the harsed password before returning the token
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    } else {
        res.status(400).send('invalid user data')
    }
})

//
// generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.jwt_secret, {
        expiresIn: '30d'
    })
}


module.exports = userRouter