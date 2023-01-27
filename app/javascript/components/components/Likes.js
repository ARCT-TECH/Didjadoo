import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
import "../pages/ProtectedIndex.css";

const Likes = ({ task, updateTask, current_user }) => {
  const [editTask, setEditTask] = useState({ likes: task.likes });
    console.log("Likes component receiving current user:", current_user)
  const onClick = () => {
    let idArray = task.likes;
    if (task.likes.includes(current_user.name) === false) {
      idArray.push(current_user.name);
      setEditTask({ ...editTask, likes: idArray });
      handleSubmit();
    } else {
      const index = idArray.indexOf(current_user.id);
      idArray.splice(index, 1);
      setEditTask({ ...editTask, likes: idArray });
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    updateTask(editTask, task.id);
  };
  console.log("editTask:", editTask);
 
  return (
    <>
      <span href="#" id="UncontrolledTooltipExample">
        <button className="task-button" onClick={onClick} name="update">
          ❤️
        </button>
      </span>
      {task.likes.length}
      <UncontrolledTooltip
        placement="right"
        target="UncontrolledTooltipExample"
      >
        Liked by:{" "}
        {task.likes.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </UncontrolledTooltip>
    </>
  );
};

export default Likes;
