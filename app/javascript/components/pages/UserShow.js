import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Likes from "../components/Likes";
import Progress from "../components/Progress";
import "./ProtectedIndex.css";

const UserShow = ({ logged_in, current_user, users, tasks, updateTask}) => {
  const { id } = useParams();
  const user = users?.find((user) => user.id === +id);
  const userTasks = tasks?.filter((task) => task.user_id === +id);
  const [toggle, setToggle] = useState({});

  function toggleFunction(id) {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }
  return (
    <div className="profile-body">
      <div className="profile-info">
        <img className="profile-pic" src={user.profilepic}></img>
        <p>{user.name}</p>
        <div>
          <p>About Me:</p>
          <p>{user.bio}</p>
        </div>

      </div>
      <div className="task-column">
        My Tasks:
        {userTasks
          ?.sort((a, b) => b.priority - a.priority)
          .map((task, index) => {
            let priority = "🔵";
            if (task.priority === "3") {
              priority = "🔴";
            } else if (task.priority === "2") {
              priority = "🟡";
            } else if (task.priority === "1") {
              priority = "🟢";
            } else {
              priority = "😑";
            }

            let progress = "🔵";
            if (task.progress === "3") {
              progress = "☑️";
            } else if (task.progress === "2") {
              progress = "▶️";
            } else if (task.progress === "1") {
              progress = "⏹";
            } else {
              progress = "⏹";
            }
            return (
              <div key={index}>
                {priority}
                {progress}
                <button
                  className="task-button"
                  onClick={() => toggleFunction(task.id)}
                >
                  <strong>{task.name}</strong>
                </button>
                <Likes
                  task={task}
                  updateTask={updateTask}
                  current_user={current_user}
                  users={users}
                />
                <span style={{ display: toggle[task.id] ? "block" : "none" }}>
                  <p>{task.description}</p>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserShow;
