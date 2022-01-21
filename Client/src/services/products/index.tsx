
import { TBook } from "../../types";
import { signInFilter, TSignInResponse } from "../../userTypes";

const services = {
  getProducts(): Promise<TBook[]> {
    return fetch('/api/products/books')
      .then((res) => res.json())
  },

  getBookDetails(name: string): Promise<TBook> {
    return fetch(`/api/products/books/${name}`)
      .then((res) => res.json())
  },

  signIn(credentials: signInFilter): Promise<TSignInResponse> {
    return fetch('/api/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
  }
}
export default services;