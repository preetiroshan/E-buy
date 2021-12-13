import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './About2.css'
import book2 from './book2.jpg';
import aboutImage from "../images/about.svg";

const About = () => {
  return (
    <div className="bg">
      <div className="about">
        <Jumbotron className="bg-transparent about-jumbo" fluid>
          <Container>
            <div className="jumbo-content">
              <h6>
                We are a group of software engineers who love reading books!!&#128512;
              </h6>
            </div>
            <img src={aboutImage} alt="hey"></img>
          </Container>
        </Jumbotron>
      </div>
    </div>
  )
}

export default About
