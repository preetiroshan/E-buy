import express from 'express';
import data from '../dataCopy.js';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/books', expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.send(products)
}))

// NOTE: For adding products to db
productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
  const createdProducts = await Product.insertMany(data.books);
  res.send({ createdProducts })
}))

productRouter.get('/books/:id', expressAsyncHandler(async (req, res) => {
  const bookId = req.params.id;
  const book = await Product.findOne({
    _id: bookId

  })
  book.id ? res.send(book) : res.status(404).send({ message: "Product not Found" })
}))

export default productRouter;
