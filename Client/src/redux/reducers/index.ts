import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import bookDetailsReducer from './bookDetailsReducer';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  bookDetails: bookDetailsReducer,
  cart: cartReducer,
  search: searchReducer,
  user: userReducer
})

export default rootReducer;