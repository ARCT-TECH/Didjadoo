import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
         
          {logged_in && (

            <a href={sign_out_route} className="nav-link">
              Log Out
            </a>
        )}
        {!logged_in && (
            <a href={sign_in_route} className="nav-link">
              Log In
            </a>
        )}
        {!logged_in && (
            <a href={new_user_route} className="nav-link">
              Sign Up
            </a>
        )}
        {logged_in && (
            <NavLink to="/protectedindex" className="nav-link">
             My To Do List
            </NavLink>
        )}
        {logged_in && (
            <NavLink to="/NewTask" className="nav-link">
              New Task
            </NavLink>
        )}
        {logged_in && (
            <NavLink to="/YourFriends" className="nav-link">
              My Friends
            </NavLink>
        )}
        </NavItem>
        
      </Nav>
    </>
  );
};

export default Navigation;
