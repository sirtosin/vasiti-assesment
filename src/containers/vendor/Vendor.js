import React from "react";
import vector from "../../assets/Vector.png";
import "./Vendor.css";
const Vendor = () => {
  return (
    <div className="vendor__container">
      <div className="vendor__text">
        <h2>Josiah’s Experience </h2>
        <button>Vendor</button>
        <p>
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good Vendor service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good Vendor service, an all round great experience. I would
          definately be coming back!
        </p>
        <h4> Share your own story!</h4>
        <span className="line">
          <img src={vector} alt="line" />
        </span>
      </div>
      <div className="vendor__image">
        <span className="ellipse"></span>
        <span className="img"></span>
      </div>
  </div>
  );
};

export default Vendor;
