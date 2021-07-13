import React, { useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import actions from '../../redux/actions';
import { TCartState } from '../../redux/reducers/cartReducer';
import { StoreState } from '../../redux/store';
import { TAddToCartFilter } from '../../types';
import CartItem from '../CartItem';

const CartScreen = ({ match }: any) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const qty = new URLSearchParams(location.search).get("qty")
  const id = new URLSearchParams(location.search).get("id")
  const cart = useSelector<StoreState, TCartState>((state) => state.products.cart)
  const { cartItems } = cart;
  useEffect(() => {
    const filter: TAddToCartFilter = { id: (id ? parseInt(id) : 0), qty: qty ? parseInt(qty) : 1 }
    if (id) {
      dispatch(actions.addToCart(filter))
    }
  }, [dispatch, id, qty])
  return (
    <Container>
      <Row>
        <Col lg={8}>
          {
            cartItems ?
              cart.cartItems.map((item, key) => (
                <CartItem key={key} item={item} />
              ))
              : <p>Cart is Empty</p>
          }
        </Col>

        <Col lg={4}>
          Subtotal : {cartItems.reduce((a, c) => a + c.qty, 0)} items
          Total Price: {cartItems.reduce((a, c) => a + (c.qty * c.book.price), 0)}
        </Col>

        <Button disabled={!cartItems.length} className="btn btn-warning">Proceed To Checkout</Button>
      </Row>
    </Container>
  )
}

export default CartScreen
