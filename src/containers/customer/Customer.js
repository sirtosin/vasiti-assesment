import React from 'react'
import vector from '../../assets/Vector.png'
import "./Customer.css"
const Customer = () => {
  return (
    <div className="customer__container">
      <div className="customer__image">
        <span className="ellipse"></span>
        <span className="img"></span>
      </div>
      <div className="customer__text">
        <h2>Tolu & Joy’s Experience </h2>
        <button>customer</button>
        <p>
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
        <h4> Share your own story!</h4>
        <span className="line">
          <img src={vector} alt="line"/>
        </span>
      </div>
    </div>
  );
}

export default Customer
