import { combineReducers } from 'redux';
import signInReducer from './signin/signInReducer';
import registerReducer from "./register/registerReducer";

const userReducer = combineReducers({
  signIn: signInReducer,
  register: registerReducer,
})

export default userReducer;