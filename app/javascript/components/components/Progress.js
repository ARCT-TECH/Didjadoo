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

  // Since this component only updates progress, we can set the initial value of editTask to just include task.progress, not all the attributes 
  const [editTask, setEditTask] = useState({ progress: task.progress });

  // The variable toggle uses state to identify which element to toggle (it was necessary to do it dynamically since we have a toggle on each mapped element), and uses the bang operator to change the state from open to closed. toggleFunction will be called in the onclick.
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
    toggleFunction(task.id)
    updateTask(editTask, task.id);
    navigate("/protectedindex");
  };

  return (
    <div className="progress-body">
      <Button

    // In order to modify styling on a reactstrap Button, you need to access an attribute called cssModule
        cssModule={{ btn: 'task-button-btn' }}
        onClick={() => toggleFunction(task.id)}
      >
      {/* The label of the button will be displayed conditionally after checking the value of task.progress. */}
        {(task.progress==="3") &&<FontAwesomeIcon icon={faSquareCheck} />}
        {(task.progress==="2") &&<FontAwesomeIcon icon={faPersonRunning} />}
        {(task.progress==="1") &&<FontAwesomeIcon icon={faSquare} />}
      </Button>

      {/* Here, when toggled, the css attribute "visibility" switches between hidden and visible. This keeps the div in the same place but hides it from sight, versus "display" which is used on Protected Index, which moves the div in and out, moving other elements in its path */}

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
