import { createSlice } from '@reduxjs/toolkit';
import actions from '../actions/products/productActions';

export type SearchState = {
  searchText: string;
}

const initialState: SearchState = {
  searchText: ''
}

const searchReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.setSearchText , (state, { payload }) => {
      state.searchText = payload
    })
    }
})

export default searchReducer.reducer;