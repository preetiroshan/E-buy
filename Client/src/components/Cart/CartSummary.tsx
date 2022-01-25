import React from 'react'
import { Button, Col, Jumbotron, Row } from 'react-bootstrap'
import { TCartItem } from '../../types'

export type TCartSummaryProps = {
  numOfItems: number;
  subTotal: number;
  shippingCost: number;
  totalPrice: number;
  cartItems: TCartItem[];
  handleShow: () => void;
}

const CartSummary = ({ numOfItems, subTotal, shippingCost, totalPrice, cartItems, handleShow }: TCartSummaryProps) => {
  return (
    <Jumbotron className="my-4 p-4 card-summary d-flex flex-column" fluid>
      {/* <Col lg={4}> */}


      <Row className="justify-content-center my-3">
        <Button variant="secondary" className="px-2" disabled={!cartItems.length}>
          Cart Summary
        </Button>
      </Row>
      <Row className="px-4 justify-content-between">
        <Col md={6} sm={6}>
          <Row><b>Subtotal:</b> </Row>
          <Row><b>Shipping: </b></Row>
          <Row><b>Total Payable:</b> </Row>
        </Col>
        <Col md={6} sm={6}>
          <Row> &#8377;{subTotal}</Row>
          <Row>&#8377;{shippingCost}</Row>
          <Row><b>&#8377;{totalPrice}</b></Row>
        </Col>
      </Row>
      <div className="d-flex justify-content-center mt-3">
        <Button disabled={!cartItems.length} className="btn btn-warning"
          onClick={handleShow}
        >
          Proceed To Checkout
          <img style={{ maxHeight: "2rem" }} src="/assets/bag.png" alt="bag" />
        </Button>
      </div>
    </Jumbotron>
  )
}

export default CartSummary
