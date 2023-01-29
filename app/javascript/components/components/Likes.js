import React, { useState } from "react";
import { UncontrolledTooltip } from "reactstrap";

const Likes = ({ task, updateTask, current_user }) => {
  const [editTask, setEditTask] = useState({ likes: task.likes });
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

  return (
    <>
      <button className="likes-task-button" onClick={onClick} name="update">
        ❤️
      </button>
      <span href="#" id={`btn-${task.id}`}>
        {task.likes.length}
      </span>

      <UncontrolledTooltip placement="right" target={`btn-${task.id}`}>
        Liked by: &nbsp;
        {task.likes.map((user, index) => (
          <span style={{ color: "white" }}>
            {(index ? ", " : "") + user}
          </span>
        ))}
      </UncontrolledTooltip>
    </>
  );
};

export default Likes;
