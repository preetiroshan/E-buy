import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaTelegramPlane } from 'react-icons/fa'
import './customStyle.css';

const Footer = () => {
  return (
    <footer className="d-flex flex-column justify-content-around align-items-stretch text-center p-4">
      <Row className="m-0 pt-4 px-4">
        <Col sm={6}>
          <Row>
            <h5>
              Useful Links
          </h5>
          </Row>

          <Row className="">
            <ul className="useful-links d-flex flex-column align-items-start pl-0">
              <li>Support</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Blogs</li>
              {/* <li></li> */}
            </ul>
          </Row>
        </Col>
        {/* <Col>
          <h5 >
            All rights reserved. | Copyright &copy; 2021
            </h5>
        </Col> */}
        <Col sm={6}>
          <Row>
            <h5>
              Follow us on social media
          </h5>
          </Row>
          <Row className="social-media justify-content-between">
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitter />
            <FaTelegramPlane />
          </Row>

        </Col>
      </Row>
      <Row className="m-0 d-flex justify-content-center">
        <small className="text-center">
          All rights reserved | Copyright &copy; 2021
            </small>
      </Row>
    </footer>
  )
}

export default Footer
