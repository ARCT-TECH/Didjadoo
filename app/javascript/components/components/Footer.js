import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <span className="footer">
        <NavLink to="/AboutUs" className="nav-link">© 2023 || About ARCT-TECH</NavLink>
      </span>
    </>
  );
};

export default Footer;
