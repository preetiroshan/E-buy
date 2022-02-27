import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import data from './dataCopy.js';
import productRouter from './router/productRouter.js';
import userRouter from './router/userRouter.js';
import bodyParser from 'body-parser';
import cors from "cors"

dotenv.config()
const app = express();

//The following two lines enable parsing of json data from the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

const connectionString = process.env.MONGODB_URL || ""

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(cors({
    origin: 'https://ebuy-bookshop.netlify.app'
}));

app.use('/api/users', userRouter)
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));