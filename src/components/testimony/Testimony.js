import React from 'react'

import "./Testimony.css"
const Testimony = ({image, title, text,location, customer, color,background}) => {
  return (
    <div className="testimony__container">
      <div className="testimony__content">
        <img src={image} alt="" />
        <h2> {title}</h2>
        <div className="testimony__location">
          <span className="testimony__location__address">  {location}</span>
          <span className="testimony__location__customer" style={{
            background: `${background}`,
          }}>
            <p style={{
              color: `${color}`,
            }}>{customer}</p>
          </span>
        </div>
        <p className='text'>
           {text}
        </p>
      </div>
    </div>
  );
}

export default Testimony
