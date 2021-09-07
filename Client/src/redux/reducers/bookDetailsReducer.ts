import { createSlice } from '@reduxjs/toolkit';
import { TBook } from '../../types';
import actions from '../actions';

export type TBookDetailsState = {
  isLoading: boolean;
  book: TBook;
  error: string | null;
}

const initialState: TBookDetailsState = {
  isLoading: true,
  book: {} as TBook,
  error: null,
}

const bookDetailsReducer = createSlice({
  name: 'bookDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.getBookDetails.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(actions.getBookDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.book = payload
    })
    builder.addCase(actions.getBookDetails.rejected, (state) => {
      state.isLoading = false
      state.book ={} as TBook
      state.error = 'Error'
    })
    builder.addCase(actions.clearAllBooks , (state) => {
      state.book ={} as TBook
    })
  }
})

export default bookDetailsReducer.reducer;