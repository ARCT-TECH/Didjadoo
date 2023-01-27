import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Progress from "../components/Progress";
import Likes from "../components/Likes";
import "./ProtectedIndex.css"
import UpdateTask from "./UpdateTask";
import NewTask from "./NewTask"
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProtectedIndex = ({
  logged_in,
  current_user,
  users,
  createTask,
  updateTask,
  tasks,
  deleteTask,
}, args) => {
  if (logged_in) {
    const myTasks = tasks?.filter((task) => task.user_id === current_user.id);
    const user = users?.find((user) => user.id === current_user.id);

    const [toggle, setToggle] = useState({});
    const [modal, setModal] = useState(false);
    const modalToggle = () => setModal(!modal);
    function toggleFunction(id) {
      setToggle({
        ...toggle,
        [id]: !toggle[id],
      });
    }

    return (
      <div className="profile-body">
          <div className="profile-info">
            <img
              
              className="profile-pic"
              src={user.profilepic}
            ></img>
            <p>Welcome back, {user.name}!</p>
            <div>
              <p>About Me:</p>
              <p>{user.bio}</p></div>
            <NavLink to={`/updateuser/${current_user.id}`}>Edit my Profile</NavLink>
            </div>
        <div className="task-column">
        <div>
          <button onClick={modalToggle}>New Task</button>
          <Modal isOpen={modal} modalToggle={modalToggle} {...createTask}>
                <ModalHeader modalToggle={modalToggle}>Add Task</ModalHeader>
                <ModalBody>
                  <NewTask modalToggle={modalToggle} createTask={createTask}/>
                </ModalBody>
                <ModalFooter>
                  <button onClick={modalToggle}>Close</button>
                </ModalFooter>
              </Modal>
        </div>
        {myTasks
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
                  <button className="task-button" onClick={()=>toggleFunction(task.id)}><strong>{task.name}</strong></button>
                <Likes
                  task={task}
                  updateTask={updateTask}
                  current_user={current_user}
                  users={users}
                /> <span style={{ display: toggle[task.id] ? 'block' : 'none' }}>
                <p>{task.description}</p>
                <Progress task={task} updateTask={updateTask} />
                <button
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                >
                  🗑
                </button>
                <button>
                  <NavLink to={`/updatetask/${task.id}`} className="nav-link">
                    ✍️
                  </NavLink>
                </button>
                </span>
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