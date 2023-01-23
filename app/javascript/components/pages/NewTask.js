import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const NewTask = ({ createTask, current_user }) => {
  const navigate = useNavigate();
  const [NewTask, setNewTask] = useState({
    name: "",
    priority: "",
    description: "",
    deadline: ""
  });

  const handleChange = (e) => {
    setNewTask({ ...NewTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (NewTask.name==="" || NewTask.priority==="")
    {
      alert ("Please enter name and priority")
    }else{
    createTask(NewTask);
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
            value={NewTask.name}
          />
          <Label for="priority">Priority</Label>
          <Input
            type="text"
            name="priority"
            onChange={handleChange}
            value={NewTask.priority}
          />
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            onChange={handleChange}
            value={NewTask.description}
          />
          <Label for="deadline">deadline</Label>
          <Input
            type="date"
            name="deadline"
            onChange={handleChange}
            value={NewTask.deadline}
          />
           </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default NewTask;
