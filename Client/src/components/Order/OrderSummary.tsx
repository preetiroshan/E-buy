import React, { useState, useCallback } from 'react';
import { Button, Modal, Row, Col, ProgressBar, Jumbotron } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Token } from 'react-stripe-checkout';
import styled from 'styled-components';
import actions from '../../redux/actions/products/productActions';
import { TAddress } from '../../types';
import CheckoutForm from '../Payment/CheckoutForm';
import AddressForm from './AddressForm'
import OrderConfirmation from "./OrderConfirmation"
import ItemsSummary from "./ItemsSummary"

type TOrderSummaryProps = {
  show: boolean;
  handleShow: () => void;
  handleClose: () => void;
  totalPrice: number;
}

const StatusImage = styled.img`
  max-width: 100%;
  max-height: 30px;
`
const OrderSummary = ({ handleClose, handleShow, show, totalPrice }: TOrderSummaryProps) => {
  const activeImageSrc = `/assets/check-active.png`;
  const inActiveImageSrc = `/assets/check-inactive.png`
  const [currentState, setCurrentState] = useState(0);
  const dispatch = useDispatch();

  const initialAddress: TAddress = {
    name: "",
    addressLine1: "",
    addressLine2: "",
    zipCode: "",
  };
  const [address, setAddress] = useState<TAddress>(initialAddress)

  const handlePaymentSuccess = useCallback(
    (token: Token) => {
      setCurrentState(2)
    }, [])

  const handleFinalClose = useCallback(() => {
    handleClose()
    if (currentState === 2) {
      dispatch(actions.emptyCart())
    }
  }, [currentState, dispatch, handleClose])
  return (
    <>
      <Modal
        show={show}
        onHide={handleFinalClose}
        keyboard={false}
      >
        {
          (currentState !== 2) &&
          <Modal.Header className="shadow" closeButton>
            <Modal.Title>
              <Row>
                <Col md={10}>
                  Order
                  <br />
                  <h3>Summary</h3>
                </Col>
                <Col md={2}>
                </Col>
              </Row>
            </Modal.Title>
          </Modal.Header>

        }
        <Modal.Body className='d-flex flex-column jumbotron mb-0 py-4 justify-content-center'>

          {
            (currentState !== 2) &&
            <>
              <ProgressBar animated variant="warning" now={!currentState ? 20 : (currentState === 1 ? 65 : 100)} />
              <Row className="justify-content-around">
                <Col className="justify-content-around align-items-end">
                  <StatusImage src={currentState ? activeImageSrc : inActiveImageSrc} alt="inactive" />
                  <b><small>Fill Address</small></b>
                </Col>
                <Col>
                  <StatusImage src={currentState === 2 ? activeImageSrc : inActiveImageSrc} alt="active" />
                  <b><small>Make Payment</small></b>
                </Col>
              </Row>
              <Row className="pl-3 my-4">
                <b>Shipping Address</b>
                {
                  (currentState === 1) &&
                  <Button variant="dark" size="sm" className="ml-4" onClick={() => setCurrentState(0)}>
                    Edit
                  </Button>
                }
              </Row>
            </>
          }
          {
            !currentState &&
            <AddressForm
              setAddress={setAddress}
              initialAddress={address}
              setCurrentState={setCurrentState}
              currentState={currentState}
              handleClose={handleClose}
            />
          }
          {
            (currentState === 1) &&
            <>
              <OrderConfirmation address={address} />
              <CheckoutForm price={totalPrice} handlePaymentSuccess={handlePaymentSuccess} />
              <ItemsSummary totalPrice={totalPrice} />
            </>
          }
          {
            (currentState === 2) &&
            <Jumbotron className="bg-light d-flex flex-column justify-content-center align-items-center m-0 p-1">
              <h4 className='my-4'>Your order is successful!! &#127873;
              </h4>
              <img src="/assets/order_placed.svg" alt="order-placed" />
            </Jumbotron>
          }
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default OrderSummary
