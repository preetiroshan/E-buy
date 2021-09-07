// import { TBook } from "./types"

export type TBook = {
  _id: number;
  id: number;
  name: string;
  price: number;
  url: string;
  author: string;
  rating: number;
  numOfReview: number;
  description: string;
  countAvailable: number;
  category: string;
  originalPrice: number;
}

export type TProducts = {
  books: TBook[]
}


export type TAddToCartFilter = {
  id: number;
  qty: number;
}

export type TCartItem = {
  book: TBook;
  qty: number;
}