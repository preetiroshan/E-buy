import React, { useCallback, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import actions from '../redux/actions';
import { TCartItem } from '../types'

type TCartItemProps = {
  item: TCartItem;
}

const CartImage = styled.img`
   width: 8rem;
   height: 8rem;
`

const CartItem = ({ item }: TCartItemProps) => {
  const dispatch = useDispatch();
  const { book, qty } = item;
  const handleRemove = useCallback(
    () => {
      dispatch(actions.removeFromCart(item.book.id))
    },
    [dispatch, item.book.id],
  )
  return (
    <div>
      <hr />
      { book &&
        <>
          <CartImage alt={book.name} src={book.url} />
          <div className="d-flex flex-column">
            {book.name}
            <p className="text-muted">{book.author}</p>
            <Button className="btn btn-warning" onClick={handleRemove}>Remove from Cart</Button>
          </div>
          <Form.Group>
            <select
              value={qty}
              onChange={(e) => dispatch(actions.addToCart({ id: book.id, qty: parseInt(e.target.value) }))}
              aria-label="Default select example"
            >
              {Array.from({ length: book.countAvailable }).map((_, idx) => (
                <option value={idx + 1} key={idx + 1}>{idx + 1}</option>
              ))}
            </select>
          </Form.Group>
        </>
      }
      <p>{qty}</p>
    </div>
  )
}

export default CartItem;
