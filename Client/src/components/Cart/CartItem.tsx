import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import actions from '../../redux/actions/products/productActions';
import { TCartItem } from '../../types';
import BookCountSelector from '../Book/BookCountSelector';

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
  const [quantity, setQuantity] = useState(qty)
  const handleRemove = useCallback(
    () => {
      dispatch(actions.removeFromCart(item.book.id))
    },
    [dispatch, item.book.id],
  )

  useEffect(() => {
    dispatch(actions.addToCart({ id: book.id, qty: quantity }))
  }, [dispatch, quantity, book.id])

  return (
    <>
      <hr />
      { book &&
        <>
          <Row className="justify-content-start align-items-start">
            <Col sm={4}>
              <CartImage alt={book.name} src={book.url} />

            </Col>

            <Col sm={10} md={6} className="mt-4">
              <Row>
                <div className="d-flex-md flex-column align-items-stretch">
                  {book.name}
                  <p className="text-muted">{book.author}</p>
                  <Form.Group>
                  </Form.Group>
                </div>
              </Row>
              <Row>
                <BookCountSelector
                  id={book.id}
                  maxQuantity={book.countAvailable} quantity={quantity} handleChange={setQuantity} handleRemove={handleRemove} />
                <img
                  onClick={handleRemove}
                  style={{ width: "25px", height: "auto" }} className="trash-icon" src="/assets/trash.png" alt="Remove from cart icon" />
              </Row>
            </Col>

          </Row>


        </>
      }
    </>
  )
}

export default CartItem;
