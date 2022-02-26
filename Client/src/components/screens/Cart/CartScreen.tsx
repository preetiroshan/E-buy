import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import actions from '../../../redux/actions/products/productActions';
import { TCartState } from '../../../redux/reducers/cartReducer';
import { TUserState } from '../../../redux/reducers/users/signin/signInReducer';
import { StoreState } from '../../../redux/store';
import { TAddToCartFilter } from '../../../types';
import CartItem from '../../Cart/CartItem';
import CartSummary from '../../Cart/CartSummary';
import EmptyCart from './EmptyCart';

const CartScreen = ({ match }: any) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const qty = new URLSearchParams(location.search).get("qty")
  const id = new URLSearchParams(location.search).get("id")
  const cart = useSelector<StoreState, TCartState>((state) => state.products.cart)
  const { signInData, isLoading, error } = useSelector<StoreState, TUserState>((state) => state.user.signIn);
  const { cartItems } = cart;
  useEffect(() => {
    const filter: TAddToCartFilter = { id: (id ? parseInt(id) : 0), qty: qty ? parseInt(qty) : 1 }
    if (id) {
      dispatch(actions.addToCart(filter))
    }
  }, [dispatch, id, qty])

  useEffect(() => {
    if (!signInData?._id) {
      history.push("/login", {
        redirectPath: "/cart"
      })
    }
  }, [signInData, history])

  const numOfItems = cartItems.reduce((a, c) => a + c.qty, 0)
  const subTotal = cartItems.reduce((a, c) => a + (c.qty * c.book.price), 0)
  const shippingCost = subTotal > 1000 ? 0 : 50
  const totalAmount = subTotal + shippingCost
  return (
    <>
      {
        cartItems.length ?
          <Container className="cart mx-2">
            <Row className="mt-4">
              <Col md={6} sm={6} xs={6}>
                {
                  cartItems ?
                    cart.cartItems.map((item, key) => (
                      <CartItem key={key} item={item} />
                    ))
                    : <p>Cart is Empty</p>
                }
              </Col>

              <Col md={6} sm={6} xs={6}>
                <CartSummary
                  numOfItems={numOfItems}
                  subTotal={subTotal}
                  shippingCost={shippingCost}
                  totalAmount={totalAmount}
                  cartItems={cartItems}
                />
              </Col>


            </Row>
          </Container>
          : <EmptyCart />

      }
    </>
  )
}

export default CartScreen
