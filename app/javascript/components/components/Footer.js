import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./Footer.css"
const Footer = (props) => {
  return (
    <>
      <div className="footer">
        © 2023 ||
        <NavLink to="/AboutUs"> ARCT-TECH</NavLink>
      </div>
    </>
  );
};

export default Footer;
