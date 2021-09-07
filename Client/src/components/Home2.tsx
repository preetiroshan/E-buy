import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home2.css';

const Home2 = () => {
  return (
    <div className="home-2">
      <Container className="py-4">
        <Row className="my-2">
          <Col md={6} className="d-flex align-items-center">
            <div className="text-center">
              <h3>Stop Thinking, Start Reading!</h3>
              <p>
                Every Genre that you like
            </p>
              <Button variant="light">Pick one</Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <img src="/assets/library.jpg" alt="bookstore" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home2;
