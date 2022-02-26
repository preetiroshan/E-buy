import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TBook } from "../../../types";
import services from "../../../services/products";
import { TAddToCartFilter } from "../../../types";
import { signInFilter } from "../../../userTypes";

const actions = {
  getAllBooks: createAsyncThunk('/products/books/getAllBooks', async() => {
    return services.getProducts()
  }),
  clearAllBooks: createAction('/products/books/clearAllBooks'),

  getBookDetails: createAsyncThunk('/products/books/getBookDetails', async(name : string) => {
    return services.getBookDetails(name)
  }),
  clearBookDetails: createAction('/products/books/clearBookDetails'),

  addToCart: createAsyncThunk('/products/books/addToCart', async(filter: TAddToCartFilter) => {
    const a  = await services.getProducts()
    const book = a.find((book: TBook) => book.id === filter.id)
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

  emptyCart: createAction('/products/books/emptyCart'),

  setSearchText: createAction('/products/books/searchText', function prepare(searchText: string){
    return {
        payload : searchText
        //This will pass searchText as the payload
    }
  }),
  signIn: createAsyncThunk('/users/signIn', async (credentials: signInFilter) => {
    return services.signIn(credentials)
  })
}

export default actions;
