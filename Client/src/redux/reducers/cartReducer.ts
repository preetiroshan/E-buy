import { createSlice } from '@reduxjs/toolkit';
import { TCartItem } from '../../types';
import actions from '../actions';
import Cookie from 'js-cookie';

const cartItems = Cookie.getJSON("cartItems") || [];

export type TCartState = {
  isLoading: boolean;
  cartItems: TCartItem[];
  error: string | null;
  num: number
}

const initialState: TCartState = {
  isLoading: false,
  cartItems: cartItems,
  error: null,
  num: 0
}

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.addToCart.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(actions.addToCart.fulfilled, (state, { payload }) => {
      const existingProduct = state.cartItems.find((item) =>
        item.book.id === payload.book.id
      )
      if(existingProduct){
        state.cartItems = state.cartItems.map((item) => item.book.id === payload.book.id ? payload : item)
      }
      else{
        state.cartItems = state.cartItems.concat(payload)
      }
      // state.cartItems = new
      state.num = state.num + payload.qty
      state.isLoading = false
      Cookie.set("cartItems", JSON.stringify(state.cartItems))
    })
    builder.addCase(actions.addToCart.rejected, (state, { payload }) => {
      state.isLoading = false
      state.error = payload ? "Error" : null
    })

    builder.addCase(actions.removeFromCart , (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.book.id !== payload)
      Cookie.set("cartItems", JSON.stringify(state.cartItems))
    })
  }
})

export default cartReducer.reducer;