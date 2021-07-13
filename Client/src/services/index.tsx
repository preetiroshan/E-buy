import { TBook } from "../data";

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
}
export default services;