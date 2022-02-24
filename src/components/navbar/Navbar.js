import React from "react";
import logo from "../../assets/logo.svg"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__links">
        <ul>
          <li>
            <a>about us</a>
          </li>
          <li>
            <a>stories</a>
          </li>
          <li>
            <a>contact</a>
          </li>
          <li>
            <a>log in</a>
          </li>
          <li>
            <a className="signup">sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
