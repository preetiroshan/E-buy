import express from 'express';
import data from './dataCopy'

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/api/products/books', (req, res) => {
  res.send(data.books)
  res.send("hi")
})

app.get('/api/products/books/:name', (req, res) => {
  const bookName = req.params.name;
  const book = data.books.find((book) => book.name.replace(/\s/g, '') == bookName.replace(/\s/g, ''))

  console.log("book is ", book)
  book ? res.send(book) : res.status(404).send({ message: "Product not Found" })
})

// app.get('/api/products/cart/?:id/?:qty', (req, res) => {
//   const bookName = req.params.name;
//   console.log("bookname is", bookName)
//   const book = data.books.find((book) => book.name.replace(/\s/g, '') == bookName)
//   console.log("book is ", book)
//   book ? res.send(book) : res.status(404).send({ message: "Product not Found" })
// })

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));