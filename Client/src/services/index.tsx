import { TBook } from "../types";
import { signInFilter, TSignInResponse } from '../userTypes';

const services = {
  getProducts(): Promise<TBook[]> {
    return fetch('/api/products/books')
      .then((res) => res.json())
  },

  getBookDetails(name: string): Promise<TBook> {
    return fetch(`/api/products/books/${name}`)
      .then((res) => res.json())
  },

  // addToCart(filter: TAddToCartFilter): Promise<TCartItem[]> {
  //   console.log("add to cart called", filter.id, filter.qty);
  //   return fetch(`/api/cart/books/${filter.id}/${filter.qty}`)
  //     .then((res) => res.json())
  // },
  signIn(credentials: signInFilter): Promise<TSignInResponse> {
    return fetch('/api/users/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then((res) => res.json())
  }
}
export default services;