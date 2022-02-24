import React from 'react'
import image from '../../assets/Ellipse24.png'
import "./Testimony.css"
const Testimony = () => {
  return (
    <div className="testimony__container">
      <div className="testimony__content">
        <img src={image} alt="" />
        <h2> tosin adefope</h2>
        <div className="testimony__location">
          <span className="testimony__location__address"> in ikeja</span>
          <span className="testimony__location__customer">customer</span>
        </div>
        <p> fedn nnnjb,hcgfbnbhj,mcgfdxSDzfxcgtihokhugfcd</p>
      </div>
    </div>
  );
}

export default Testimony
