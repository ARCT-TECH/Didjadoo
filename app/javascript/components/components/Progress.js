import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledPopover,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";

const Progress = ({ task, updateTask }) => {
  const navigate = useNavigate();
  const [editTask, setEditTask] = useState({ progress: task.progress });
  const [toggle, setToggle] = useState({});
  function toggleFunction(id) {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }
  const handleChange = (e) => {
    setEditTask({ ...editTask, progress: e.target.value });
  };
  const handleSubmit = () => {
    updateTask(editTask, task.id);
    navigate("/protectedindex");
  };

  return (
    <div className="progress-body">
      <Button
        cssModule={{ btn: 'task-button-btn' }}
        onClick={() => toggleFunction(task.id)}
      >
        {(task.progress==="3") &&<FontAwesomeIcon icon={faSquareCheck} />}
        {(task.progress==="2") &&<FontAwesomeIcon icon={faPersonRunning} />}
        {(task.progress==="1") &&<FontAwesomeIcon icon={faSquare} />}
        {(!task.progress) &&<FontAwesomeIcon icon={faSquare} />}
      </Button>
      <div className="progress-form" style={{ visibility: toggle[task.id] ? "visible" : "hidden"  }}>
        <Form className="update-form">
          <FormGroup>
            <Input
              id="progress"
              name="progress"
              type="select"
              className="dropdown"
              value={editTask.value}
              onChange={handleChange}
            >
              <option>Progress:</option>
              <option value="3">Complete!</option>
              <option value="2">In progress</option>
              <option value="1">Not started</option>
            </Input>
          </FormGroup>
          <Button cssModule={{ btn: 'task-button-btn' }} onClick={handleSubmit} name="update">
        ➡️
        </Button>
        </Form>
      </div>
    </div>
  );
};

export default Progress;
