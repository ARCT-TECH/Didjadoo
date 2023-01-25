import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"


const UpdateTask = ({tasks, updateTask, current_user }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const currentTask = tasks?.find((task) => task.id === +id);

  const [editTask, setEditTask] = useState({
    name: currentTask.name,
    priority: currentTask.priority,
    description: currentTask.description,
    deadline: currentTask.deadline,
    progress: currentTask.task
  });

  const handleChange = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateTask(editTask, currentTask.id)
    navigate("/protectedindex")
  }
 
  return (
    <div className="task-update">
      <h1>Edit Task</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            name="name"
            onChange={handleChange}
            type="text"
            value={editTask.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="priority">Priority</Label>
          <Input
            name="priority"
            onChange={handleChange}
            type="text"
            value={editTask.priority}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            name="description"
            onChange={handleChange}
            type="text"
            value={editTask.description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="deadline">Deadline</Label>
          <Input
            name="deadline"
            onChange={handleChange}
            type="date"
            value={editTask.deadline}
          />
        </FormGroup>
        <FormGroup>
          <Label for="progress">Progress</Label>
          <Input
            name="progress"
            onChange={handleChange}
            type="text"
            value={editTask.progress}
          />
        </FormGroup>
          <Button onClick={handleSubmit}>Submit Task Changes</Button>
        </Form>
      </div> 
        )
      
}

export default UpdateTask;
