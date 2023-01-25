import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      © 2023 ||
      <NavLink to="/AboutUs">ARCT-TECH</NavLink>
    </>
  );
};

export default Footer;
