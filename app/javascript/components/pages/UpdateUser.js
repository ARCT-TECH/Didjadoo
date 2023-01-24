import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const UpdateUser = ({ updateUser, current_user }) => {
  const navigate = useNavigate();
  const [userParams, setUserParams] = useState({
    name: current_user.name,
    profilepic: current_user.profilepic,
    bio: current_user.bio,
  });

  const handleChange = (e) => {
    setUserParams({ ...userParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (userParams.name === "") {
      alert("Please enter Your Name");
    } else {
      updateUser(userParams, current_user.id);
      navigate("/protectedindex");
    }
  };
  return (
    <div>
      <Form>
        <h1>Edit Your Profile!</h1>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={userParams.name}
          />
          <Label for="profilepic">Your Profile Pic</Label>
          <Input
            type="text"
            name="profilepic"
            onChange={handleChange}
            value={userParams.profilepic}
          />
          <Label for="bio">Tell us about you</Label>
          <Input
            type="text"
            name="bio"
            onChange={handleChange}
            value={userParams.bio}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Save</Button>
      </Form>
    </div>
  );
};
export default UpdateUser;
