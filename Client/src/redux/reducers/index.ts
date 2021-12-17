import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import bookDetailsReducer from './bookDetailsReducer';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  bookDetails: bookDetailsReducer,
  cart: cartReducer,
  search: searchReducer,
})

export default rootReducer;