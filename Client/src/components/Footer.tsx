import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import './customStyle.css';

const Footer = () => {
  return (
    <footer className="text-center">
      <Container className="p-4">
        <Row>
          <Col>
            <h5 >

              Made with love from India | Copyright &copy; 2021
      </h5>
          </Col>

          <Col className="d-flex justify-content-between">
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitter />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
