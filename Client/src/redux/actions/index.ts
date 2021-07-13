import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { TBook } from "../../data";
import services from "../../services";
import { TAddToCartFilter, TCartItem } from "../../types";

const actions = {
  getAllBooks: createAsyncThunk('/products/books/getAllBooks', async() => {
    return services.getProducts()
  }),
  clearAllBooks: createAction('/products/books/clearAllBooks'),

  getBookDetails: createAsyncThunk('/products/books/getBookDetails', async(name : string) => {
    console.log('getdetails called')
    // console.log('id in action is', id, typeof id);
    return services.getBookDetails(name)
  }),
  clearBookDetails: createAction('/products/books/clearBookDetails'),

  // addToCart: createAction('/products/books/getCartDetails', function prepare(filter: TAddToCartFilter){
  //   return {
  //     payload: {
  //       book: filter.book,
  //       qty: filter.qty
  //     }
  //   }
  // }),
  addToCart: createAsyncThunk('/products/books/addToCart', async(filter: TAddToCartFilter) => {
    const a  = await services.getProducts()
    const book = a.find((book) => book.id === filter.id)
    return {
        book: book || {} as TBook,
        qty: filter.qty
    }
  }),

  removeFromCart: createAction('/products/books/removeFromCart', function prepare(id: number){
    return {
        payload : id
        //This will pass id as the payload
    }
  }),
}

export default actions;
