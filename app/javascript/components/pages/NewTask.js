import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const newTask = ({ createTask, current_user, modalToggle }) => {
  const navigate = useNavigate();
  const [newTask, setnewTask] = useState({
    name: "",
    priority: "",
    description: "",
    deadline: ""
  });

  const handleChange = (e) => {
    setnewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (newTask.name==="" || newTask.priority==="")
    {
      alert ("Please enter name and priority")
    }else{
    createTask(newTask);
    modalToggle()
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
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default newTask;
