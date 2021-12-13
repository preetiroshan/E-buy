import express from 'express';
import User from '../models/userModel.js';
import data from '../dataCopy.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateToken } from '../auth/tokenHandler.js'

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers })
}))

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user && user.email && password) {
    if (bcrypt.compareSync(password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: jwt.sign(
          {
            _id: user._id,
            email: user.email,
            name: user.name
          },
          process.env.KEY || "token_key",
          {
            expiresIn: "2h"
          })
      })
      return

      //   }
    }
  }
  res.status(401).send("Invalid email or password")
})
)

export default userRouter;
