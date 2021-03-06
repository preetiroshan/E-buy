import { useCallback, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import actions from '../../redux/actions/products/productActions';
import { TCartItem } from '../../types'
import BookCountSelector from '../Book/BookCountSelector';
import './CartItem.css'

type TCartItemProps = {
  item: TCartItem;
}

const CartImage = styled.img`
   width: 10em;
   height: 10em;
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
      {book &&
        <>
          <Row className="">
            <Col sm={4} md={6} xs={8}>
              <CartImage alt={book.name} src={book.url} className='ml-sm-2' />

            </Col>

            <Col sm={8} md={6} className="mt-4 ml-3 ml-sm-0">
              <Row>
                <div className="d-flex-md flex-column align-items-stretch text-wrap">
                  {book.name}
                  <p className="text-muted word-wrap">{book.author}</p>
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
                  className="trash-icon" src="/assets/trash.png" alt="Remove from cart icon" />
              </Row>
            </Col>

          </Row>


        </>
      }
    </>
  )
}

export default CartItem;
