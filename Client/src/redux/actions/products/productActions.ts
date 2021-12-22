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
    // const response = await services.signIn(credentials);
    // console.log("ffufdhfhg")
    // localStorage.setItem('token', response.token)
    // return response.token
    console.log("service called")
    return services.signIn(credentials)
  })
  // logOut:
}

export default actions;
