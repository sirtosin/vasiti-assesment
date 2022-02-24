import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__text">
        <h1>Amazing
          <br/>Experiences from Our Wonderful Customers</h1>
        <p>
          Here is what customers and vendors are saying about us, you can share
          your stories with us too.
        </p>
      </div>
      <div className="hero__image">
        <span className='ellipse'></span>
        <span className='img'>

        </span>
      </div>
    </div>
  );
}

export default Hero
