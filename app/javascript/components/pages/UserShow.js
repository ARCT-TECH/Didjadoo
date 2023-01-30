import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Likes from "../components/Likes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";

const UserShow = ({ logged_in, current_user, users, tasks, updateTask }) => {
  const { id } = useParams();
  const user = users?.find((user) => user.id === +id);
  const userTasks = tasks?.filter((task) => task.user_id === +id);
  const publicTasks = userTasks.filter((task) => task.private === "false");
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
        <div className="about-me-block">
          <div className="user-name-title">
            <strong>
              {user.bio && <span>About</span>} {user.name}
            </strong>
          </div>

          <p className="text-area-display">{user.bio}</p>
        </div>
      </div>
      <div className="task-column">
        My Tasks:
        {publicTasks
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
              priority = "🟢";
            }

            let progress = "🔵";
            if (task.progress === "3") {
              progress = <FontAwesomeIcon icon={faSquareCheck} />;
            } else if (task.progress === "2") {
              progress = <FontAwesomeIcon icon={faPersonRunning} />;
            } else if (task.progress === "1") {
              progress = <FontAwesomeIcon icon={faSquare} />;
            } else {
              progress = <FontAwesomeIcon icon={faSquare} />;
            }
            return (
              <div key={index} className="task-row">
                <div className="task-obj-no-like">
                  <div id="progress-title" className="progress-title">
                    <button
                      className="task-button"
                      onClick={() => toggleFunction(task.id)}
                    >
                      <strong>
                        {progress}
                        {"  "}
                        {task.name}
                      </strong>
                    </button>
                  </div>
                  <div className="priority">{priority}</div>
                  <div
                    className="extra-info"
                    style={{ display: toggle[task.id] ? "block" : "none" }}
                  >
                    <div className="text-area-display">{task.description}</div>
                    {task.deadline && <div>Deadline: {task.deadline}</div>}
                  </div>
                </div>
                <div className="likes">
                  <Likes
                    task={task}
                    updateTask={updateTask}
                    current_user={current_user}
                    users={users}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserShow;
