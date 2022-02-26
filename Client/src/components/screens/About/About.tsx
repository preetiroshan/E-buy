import React from 'react';
import aboutImage from "../../../images/about.svg";

const About = () => {
  return (
    <div className="d-md-flex m-4 pt-4 align-items-center">
      <h5>
        I am a software engineer who loves reading books!!&#128512;
        </h5>
      <img src={aboutImage} alt="hey"></img>
    </div>
  )
}

export default About
