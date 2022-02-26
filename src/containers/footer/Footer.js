 import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import { Banner } from "..";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__top">
        <Banner />
      </div>

      <div className="footer__links">
        <div className="footer__links__item">
          <h2>Company</h2>
          <p> About us</p> <p>Term of Use </p>
          <p>Privacy Policy</p> <p>Press & Media</p>
        </div>
        <div className="footer__links__item">
          <h2>products</h2>
          <p>marketplace</p>
          <p> magazine</p> <p>seller </p>
          <p>wholesale</p> <p>services</p>
        </div>
        <div className="footer__links__item">
          <h2>careers</h2>
          <p> become a campus rep</p> <p>become a vasiti influencer</p>
          <p> become a campus writer</p>
          <p> become an affliate</p>
        </div>
        <div className="footer__links__item">
          <h2>get in touch</h2>
          <p> contact us</p>
          <p> partner with us</p>
          <p> advertise with us</p>
          <p>help/faqs</p>
        </div>
        <div className="footer__links__item">
          <h2>join our community</h2>
          <span className="social">
            <Facebook   className="social__icons" />
            <Instagram className="social__icons" />
            <Twitter className="social__icons" />
            <LinkedIn className="social__icons" />
          </span>
          <p>email newsletter</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
