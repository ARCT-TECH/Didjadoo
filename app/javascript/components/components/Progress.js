import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../pages/ProtectedIndex.css"

const Progress = ({ task, updateTask }) => {
  const navigate = useNavigate();
  const [editTask, setEditTask] = useState({ progress: task.progress });

  const handleChange = (e) => {
    setEditTask({ ...editTask, progress: e.target.value });
  };
  const handleSubmit = () => {
    updateTask(editTask, task.id);
  };
  console.log("editTask:", editTask);

  return (
    <>
      <Form className="update-form">
          <Input
            id="progress"
            name="progress"
            type="select"

            className="dropdown"
            value={editTask.value}
            onChange={handleChange}
          >
            <option>Progress:</option>
            <option value="3">☑️ Complete!</option>
            <option value="2">▶️ In progress</option>
            <option value="1">⏹ Not started</option>
          </Input>
        <button className="task-button" onClick={handleSubmit} name="update">
        ➡️
        </button>
      </Form>
    </>
  );
};

export default Progress;