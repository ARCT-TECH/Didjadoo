import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import NewTask from "../pages/NewTask";

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
  createTask,
}) => {
  const [modal, setModal] = useState(false);
  const modalToggle = () => setModal(!modal);
  return (
    <section className="wholeheader">
      <div className="brand">
        <img className="logo" src={logo} alt="logo" />
        <a className="header-brand" href="/">
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
              <a onClick={modalToggle}>New Task</a>
              <Modal isOpen={modal} modalToggle={modalToggle} {...createTask}>
                <ModalHeader modalToggle={modalToggle}>Add Task</ModalHeader>
                <ModalBody>
                  <NewTask modalToggle={modalToggle} createTask={createTask} />
                </ModalBody>
                <ModalFooter>
                  <button onClick={modalToggle}>Cancel</button>
                </ModalFooter>
              </Modal>
            </div>

            <div className="link" id="headerbutton">
              <a href={sign_out_route} className="nav-link">
                Log Out
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Header;
