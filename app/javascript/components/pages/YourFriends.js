import React from "react";
import { NavLink } from "react-router-dom";
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
    <div>
      {users?.map((users, index) => {
        return (
          <>
            <Card
              style={{
                width: "18rem",
              }}

              key={index}
            >
              <img alt="Card" src={users?.profilepic} />
              <CardBody>
                <CardTitle tag="h5">{users?.name}</CardTitle>
                <CardText>{users?.bio}</CardText>
              </CardBody>
              <CardBody>
                <NavLink to={`/usershow/${users?.id}`}>
                  <Button>View Profile</Button>
                </NavLink>
              </CardBody>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default YourFriends;
