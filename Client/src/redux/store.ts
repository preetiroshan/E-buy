import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksReducer from './reducers/booksReducer'
import rootReducer from './reducers';

export type StoreState = {
  products: BookState
}

// const reducer = combineReducers({
//   books: booksReducer
// })

export type BookState = ReturnType<typeof rootReducer>

const store = configureStore<StoreState>({
  reducer: {
    products: rootReducer
  }
});

export default store;