import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import './HomeCaousel.css'

const StyledCarousel = styled(Carousel)`
 color: blue !important;
 margin-bottom: 2.5rem;
`

const HomeCarousel = () => {
  return (
    <StyledCarousel wrap>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/11.jpeg"
          alt="First slide"
        />
        <Carousel.Caption className="h6">
          <b>FLAT 20% OFF</b>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/9.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <b>It's NOW OR NEVER!! </b>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/12.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <b>Get, Set, Read!!</b>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  )
}

export default HomeCarousel;
