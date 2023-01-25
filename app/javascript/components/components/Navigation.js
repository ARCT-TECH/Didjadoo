import React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
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
    <Navbar>
      <Nav>
        <NavItem>
          <NavLink to="/yourfriends/" className="nav-link">
            Didjadooers
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
        
        </NavItem>
      </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
