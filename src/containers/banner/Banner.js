import React from 'react'
import "./Banner.css"
import image from '../../assets/banner.png'
const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner__image">
        <img src={image} alt="banner" />
      </div>
      <div className="banner__text">
        <h2>Be a member of our community 🎉</h2>
        <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world. </p>
        <div className="input">
          <input
            type="email"
            placeholder="enter your e-mail address"
            className="input__text"
          />
          <button className="banner__button">subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Banner
