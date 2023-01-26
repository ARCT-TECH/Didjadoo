import React from "react";
// import Navigation from "./Navigation";
import logo from "../assets/logo.png";
import "./Header.css";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <div className="wholeheader">
      <div className="brand">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
          Didjadoo
        </a>
      </div>
      <div className="navigation">
        {!logged_in && (
          <div className="loggedout">
            <div className="link" id="headerbutton">
              <a href={sign_in_route} className="nav-link">
                Log In
              </a>
            </div>

            <div className="link" id="headerbutton">
              <a href={new_user_route} className="nav-link">
                Sign Up
              </a>
            </div>
          </div>
        )}
        {logged_in && (
          <>
            <div className="link">
              <NavLink to="/yourfriends/" className="nav-link">
                Didjadooers
              </NavLink>
            </div>

            <div className="link">
              <NavLink to="/protectedindex" className="nav-link">
                My To Do List
              </NavLink>
            </div>

            <div className="link">
              <NavLink to="/NewTask" className="nav-link">
                New Task
              </NavLink>
            </div>

            <div className="link" id="headerbutton">
              <a href={sign_out_route} className="nav-link">
                Log Out
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
