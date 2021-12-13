import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export type StoreState = {
  products: BookState
}

export type BookState = ReturnType<typeof rootReducer>

const store = configureStore<StoreState>({
  reducer: {
    products: rootReducer
  }
});

export default store;