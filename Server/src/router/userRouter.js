import express from 'express';
import User from '../models/userModel.js';
import data from '../dataCopy.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateToken } from '../auth/tokenHandler.js'

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    await User.remove({});
    // this inserts users from datacopy file into the db
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers })
}))

userRouter.post('/signin', expressAsyncHandler(async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user && user.email && user.password) {
        if (bcrypt.compareSync(password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: jwt.sign({
                        _id: user._id,
                        email: user.email,
                        name: user.name
                    },
                    process.env.KEY || "token_key", {
                        expiresIn: "2h"
                    })
            })
            return
        }
    }
    res.status(401).send("Invalid email or password")
}))

userRouter.post('/register', expressAsyncHandler(async(req, res) => {
    const { name, email, password } = req.body;
    const user = new User({
        name,
        email,
        password: bcrypt.hashSync(password, 10)
    })

    const createdUser = await user.save();
    if (createdUser) {
        res.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            token: jwt.sign({
                    _id: createdUser._id,
                    email: createdUser.email,
                    name: createdUser.name
                },
                process.env.KEY || "token_key", {
                    expiresIn: "2h"
                })
        })
    }
    res.status(401).send("Something went wrong. Please try again")
}))

userRouter.post('/addToCart', expressAsyncHandler(async(req, res) => {
    const { bookId: _id, email } = req.body;
    const user = await User.findOne({ email: email });
    if (user && user.email && user.password) {
        const itemInCart = user.cartItems && user.cartItems.filter((item) => item._id === _id)
        if (itemInCart.name) {
            itemInCart.countInNumber += 1
            res.status(200).send("Added")
        }
    }
    res.status(401).send("Invalid email or password")
}))

export default userRouter;