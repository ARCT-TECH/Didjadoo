import React from "react";
import { NavLink } from "react-router-dom";
import "./YourFriends.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

const YourFriends = ({ users }) => {
  return (
    <div className="container">
      {users?.map((users, index) => {
        return (
          <div
            className="name"
            // style={{
            //   width: "18rem",
            // }}
            key={index}
          >
            <NavLink to={`/usershow/${users?.id}`}>
              <img id="indeximg" alt="Card" src={users?.profilepic} />
            </NavLink>

            <CardTitle tag="h5">{users?.name}</CardTitle>
            <CardText>{users?.bio}</CardText>
          </div>
        );
      })}
    </div>
  );
};

export default YourFriends;
