import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import userReducer from './reducers/users'

export type StoreState = {
  products: BookState,
  user: UserState
}

export type BookState = ReturnType<typeof rootReducer>
export type UserState = ReturnType<typeof userReducer>

const store = configureStore<StoreState>({
  reducer: {
    products: rootReducer,
    user: userReducer,
  }
});

export default store;