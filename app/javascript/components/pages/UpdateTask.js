import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"


const updateTask = ({tasks, taskUpdate, current_user }) => {
  if (!tasks || !current_user) return <div>Loading...</div>;
  const navigate = useNavigate()
  const { id } = useParams()
  const currentTask = tasks?.find(
    ((task) => task.id === +id)
  ) 

  const [editTask, setEditTask] = useState({
    name: currentTask.name,
    priority: currentTask.priority,
    description: currentTask.description,
    deadline: currentTask.deadline,
    progress: currentTask.progress,
  });

  const handleChange = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    taskUpdate(editTask, currentTask.id)
    navigate(`/protectedindex/${id}`)
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
            placeholder="What is the name of your task?"
            type="text"
            value={editTask?.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="priority">Priority</Label>
          <Input
            name="priority"
            onChange={handleChange}
            placeholder="What is the priority?"
            type="text"
            value={editTask?.priority}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            name="description"
            onChange={handleChange}
            placeholder="What is the description of the task?"
            type="text"
            value={editTask?.description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="deadline">Deadline</Label>
          <Input
            name="deadline"
            onChange={handleChange}
            placeholder="What is the task's deadline?"
            type="text"
            value={editTask?.deadline}
          />
        </FormGroup>
        <FormGroup>
          <Label for="progress">Progress</Label>
          <Input
            name="progress"
            onChange={handleChange}
            placeholder="What is the progress stauts of the task?"
            type="text"
            value={editTask?.progress}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit Task Changes</Button>
        </Form>
        </div> 
        )
      
}

export default updateTask;
