import React from "react";
import { NavLink } from "react-router-dom";
import UpdateTask from "./UpdateTask";

const ProtectedIndex = ({
  logged_in,
  current_user,
  users,
  createTask,
  updateTask,
  tasks,
}) => {
  if (logged_in) {
    const myTasks = tasks?.filter((task) => task.user_id === current_user.id);
    const user = users?.find((user) => user.id === current_user.id);
    return (
      <div>
        <img className="ProfilePic" src={user.profilepic}></img>
        <p>Welcome back, {user.name}</p>
        <div>{user.bio}</div>
        <NavLink to={`/updateuser/${current_user.id}`}>Edit my Profile</NavLink>
        <p>
          <NavLink to="/NewTask">New Task</NavLink>
        </p>
        {current_user &&
          myTasks.map((task, index) => {
            return (
              <div key={index}>
                <p>Name: {task.name}</p>
                <p>Description: {task.description}</p>
                <p>Priority: {task.priority}</p>

                <button><NavLink to= {`/updatetask/${task.id}`} className="nav-link">
             Update Task
            </NavLink></button>
                <button>Delete Task</button>
              </div>
            );
          })}
      </div>
    );
  } else {
    return <div>Please log in or sign up to view your profile</div>;
  }
};

export default ProtectedIndex;
