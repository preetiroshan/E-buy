import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './screens/Cart.css';

const EmptyCart = () => {
  return (
    <div className="empty-cart text-center my-4">
      {/* <img src='/' alt="empty cart" /> */}
      {/* <Container> */}
      <Row className="m-4">
        <Col md={3} className="d-flex flex-column align-items-stretch justify-content-center mt-4 p-5">
          <h1 className="my-5">Oops! Your cart is empty!</h1>
          <Link to="/">
            <Button className="my-5" variant="dark">Grab a Book!</Button></Link>
        </Col>
        <Col md={9} className="d-flex bg-empty align-items-center">
          {/* <div className="bg-e">gygy</div> */}
          {/* <img src="../images/empty-list.png" alt="empty" /> */}
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  )
}

export default EmptyCart
