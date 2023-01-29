import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Progress from "../components/Progress";
import Likes from "../components/Likes";
import NewTask from "./NewTask";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ProtectedIndex = (
  { logged_in, current_user, users, createTask, updateTask, tasks, deleteTask },
  args
) => {
  if (logged_in) {
    const myTasks = tasks?.filter((task) => task.user_id === current_user.id);
    const user = users?.find((user) => user.id === current_user.id);
    const [toggle, setToggle] = useState({});
    function toggleFunction(id) {
      setToggle({
        ...toggle,
        [id]: !toggle[id],
      });
    }

    const [modal, setModal] = useState(false);
    const modalToggle = () => setModal(!modal);


    return (
      <div className="profile-body">
        <div className="profile-info">
          <img className="profile-pic" src={user.profilepic}></img>
          <p>Welcome back, {user.name}!</p>{" "}
          <NavLink to={`/updateuser/${current_user.id}`}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </NavLink>
          <div>
            <p>About Me:</p>
            <p>{user.bio}</p>
          </div>
        </div>
        <div className="task-column">
          <div>
            <button onClick={modalToggle}>New Task</button>
            <Modal isOpen={modal} modalToggle={modalToggle} {...createTask}>
              <ModalHeader modalToggle={modalToggle}>Add Task</ModalHeader>
              <ModalBody>
                <NewTask modalToggle={modalToggle} createTask={createTask} />
              </ModalBody>
              <ModalFooter>
                <button onClick={modalToggle}>Close</button>
              </ModalFooter>
            </Modal>
          </div>
          {myTasks
            ?.sort((a, b) => b.priority - a.priority)
            .map((task, index) => {
              let privacy = "";
              if (task.private === "false") {
                privacy = "";
              } else {
                privacy = <FontAwesomeIcon icon={faLock}/>;
              }

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
                console.log("Task from map on protected index:", task.name)
              return (
                <div key={index} className="task-row">
                  <div className="task-obj-no-like">
                    <div id="progress-title" className="progress-title">
                      <Progress task={task} updateTask={updateTask}/>
                      <button
                        className="task-button"
                        onClick={() => toggleFunction(task.id)}
                      >
                        <strong>
                          {"  "}
                          {task.name}{"  "}{privacy}
                        </strong>
                      </button>
                    </div>
                    <div className="priority">{priority}</div>
                    <div
                      className="extra-info"
                      style={{ display: toggle[task.id] ? "block" : "none" }}
                    >
                      <div>{task.description}</div>
                      {task.deadline && <div>Deadline:{" "}{task.deadline}</div>}

                      <button
                        className="task-button-btn"
                        onClick={() => {
                          var result = window.confirm(
                            "Are you sure you want to delete this task? Once deleted, it cannot be recovered."
                          );
                          if (result) {
                            deleteTask(task.id);
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                      <button className="task-button-btn">
                        <NavLink
                          to={`/updatetask/${task.id}`}
                          className="nav-link"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </NavLink>
                      </button>
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
  } else {
    return <div>Please log in or sign up to view your profile</div>;
  }
};

export default ProtectedIndex;
