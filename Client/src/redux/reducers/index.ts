import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import bookDetailsReducer from './bookDetailsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  bookDetails: bookDetailsReducer,
  cart: cartReducer,
})

export default rootReducer;