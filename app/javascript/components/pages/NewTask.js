import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const newTask = ({ createTask, current_user, modalToggle }) => {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState({
    name: "",
    priority: "",
    description: "",
    deadline: "",
    private: "false",
  });
  const handleChangePrivacy = (e) => {
    if (newTask.private === "true") {
      newTask.private = "false";
      setNewTask({
        ...newTask,
        [e.target.private]: (e.target.value = "false"),
      });
      console.log(newTask);
    } else {
      newTask.private = "true";
      setNewTask({
        ...newTask,
        [e.target.private]: (e.target.value = "true"),
      });
      console.log(newTask);
    }
  };

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (newTask.name === "" || newTask.priority === "") {
      alert("Please enter name and priority");
    } else {
      createTask(newTask);
      modalToggle();
      navigate("/protectedindex");
    }
  };
  return (
    <div>
      <Form>
        <h1>Create a New Task</h1>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={newTask.name}
          />
          <Label for="priority">Priority</Label>
          <Input
            type="text"
            name="priority"
            onChange={handleChange}
            value={newTask.priority}
          />
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            onChange={handleChange}
            value={newTask.description}
          />
          <Label for="deadline">deadline</Label>
          <Input
            type="date"
            name="deadline"
            onChange={handleChange}
            value={newTask.deadline}
          />
        </FormGroup>
        <Label check>Make Private:</Label>
        <FormGroup switch>
          <Input
            type="switch"
            name="private"
            value={newTask.private}
            onClick={handleChangePrivacy}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default newTask;
