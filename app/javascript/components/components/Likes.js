import React, { useState } from "react";
import { UncontrolledTooltip } from "reactstrap";

const Likes = ({ task, updateTask, current_user }) => {
  const [editTask, setEditTask] = useState({ likes: task.likes });
    // A task's likes are stored as an array. If the array does not yet include the user's name, it will push it onto the end of the array. If it already includes the current user's name, then it will identify the index of that user name and splice it off.
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
    {/* Here, the id of this element is required to be a string by the Uncontrolled Tooltip, but also needs dynamic information passed to it (the specific task whose likes we are showing), so we use string interpolation.  */}
      <span href="#" id={`btn-${task.id}`}>
        <button className="likes-task-button" onClick={onClick} name="update">
          ❤️
        </button>

        {task.likes.length}
      </span>
{/* This element hold the content that will be displayed when hovering over the specific id referenced in the target attribute. */}
      <UncontrolledTooltip placement="right" target={`btn-${task.id}`}>
        Liked by: &nbsp;
        {task.likes.map((user, index) => (
          <span key={index} style={{ color: "white" }}>

      {/* This line allows the array of likes to be displayed in a grammatically pleasing way, with commas before every element except the one with an index of 0, which javascript reads as falsy */}
            {(index ? ", " : "") + user}
          </span>
        ))}
      </UncontrolledTooltip>
    </>
  );
};

export default Likes;
