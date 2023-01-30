import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTask = ({ tasks, updateTask, current_user }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentTask = tasks?.find((task) => task.id === +id);

  const [editTask, setEditTask] = useState({
    name: currentTask.name,
    priority: currentTask.priority,
    description: currentTask.description,
    deadline: currentTask.deadline,
    privacy: currentTask.privacy
  });
  const handleChangePrivacy = (e) => {
    if (editTask.private === "true") {
      editTask.private = "false";
      setEditTask({
        ...editTask,
        [e.target.private]: (e.target.value = "false"),
      });
    } else {
      editTask.private = "true";
      setEditTask({
        ...editTask,
        [e.target.private]: (e.target.value = "true"),
      });
    }
  };
  const handleChange = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateTask(editTask, currentTask.id);
    navigate("/protectedindex");
  };

  return (
    <div className="update-form-style">
      <h1>Update Task</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input className="input-style"
            name="name"
            onChange={handleChange}
            type="text"
            value={editTask.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Priority">Select</Label>
          <Input className="input-style"
            id="priority"
            name="priority"
            type="select"
            value={editTask.value}
            onChange={handleChange}
          >
            <option>Choose priority:</option>
            <option value="3">🔴 High Priority - get it done ASAP!</option>
            <option value="2">🟡 Medium Priority - get it done soon.</option>
            <option value="1">🟢 Low priority - when you have time.</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input className="input-style" 
            name="description"
            onChange={handleChange}
            type="textarea"
            value={editTask.description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="deadline">Deadline</Label>
          <Input className="input-style"
            name="deadline"
            onChange={handleChange}
            type="date"
            value={editTask.deadline}
          />
        </FormGroup>
        <Label check>Make Private:</Label>
        <FormGroup switch>
          <Input className="input-style"
            type="switch"
            name="private"
            value={editTask.private}
            onClick={handleChangePrivacy}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit Task Changes</Button>
      </Form>
    </div>
  );
};

export default UpdateTask;
