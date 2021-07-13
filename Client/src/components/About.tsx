import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './About.css'

const About = () => {
  return (
    <div className="bg">
      <div className="about">
        <Jumbotron className="bg-transparent about-jumbo" fluid>
          <Container>
            <div className="jumbo-content">
              <h1>
                We are a group of software engineers who love reading books!!&#128512;
              </h1>
            </div>
          </Container>
        </Jumbotron>
      </div>
    </div>
  )
}

export default About
