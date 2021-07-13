import { TBook } from "./data"

export type TAddToCartFilter = {
  id: number;
  qty: number;
}

export type TCartItem = {
  book: TBook;
  qty: number;
}