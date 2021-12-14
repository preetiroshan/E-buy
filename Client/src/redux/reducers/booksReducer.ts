import { createSlice } from '@reduxjs/toolkit';
import { TBook } from '../../types';
import actions from '../actions/products/productActions';

export type TBookState = {
  isLoading: boolean;
  books: TBook[];
  error: string | null;
}

const initialState: TBookState = {
  isLoading: false,
  books: [],
  error: null,
}

const booksReducer = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.getAllBooks.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(actions.getAllBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.books = payload
    })
    builder.addCase(actions.getAllBooks.rejected, (state) => {
      state.isLoading = false
      state.books =[]
      state.error = 'Error'
    })
    builder.addCase(actions.clearAllBooks , (state) => {
      state.books =[]
    })
  }
})

export default booksReducer.reducer;