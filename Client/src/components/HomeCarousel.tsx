import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
 color: blue;
 margin-bottom: 2.5rem
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
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/9.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <b>Second slide label</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/12.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <b>Third slide label</b>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  )
}

export default HomeCarousel;
