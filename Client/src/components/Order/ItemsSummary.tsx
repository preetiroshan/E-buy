import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { TCartState } from '../../redux/reducers/cartReducer';
import { StoreState } from '../../redux/store';

type TItemsSummaryProps = {
  totalPrice: number;
}

const ItemsSummary = ({ totalPrice }: TItemsSummaryProps) => {
  const { cartItems } = useSelector<StoreState, TCartState>((state) => state.products.cart)
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Book</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map((item, key) => (
              <tr key={key}>
                <td>
                  {item.book.name}
                  <br />
                  <small className='text-muted'>{item.book.author}</small>
                </td>
                <td>{`${item.qty} X ${item.book.price}`}</td>
              </tr>
            ))
          }
          <tr>
            <td>
              <b>Subtotal</b>
              (Including Shipping charges)
            </td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default ItemsSummary
