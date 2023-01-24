import React from "react";
import { NavLink } from "react-router-dom";

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

    return (
      <div>
        <div className="ProfilePic">{current_user.profilepic}</div>
        <p>Welcome back, {current_user.name}</p>
        <div>{current_user.bio}</div>
        <button>Edit my Profile</button>
        <NavLink to="/NewTask" className="nav-link">
                  New Task
                </NavLink>
        {current_user &&
          myTasks.map((task, index) => {
            return (
              <div key={index}>
                <p>Name: {task.name}</p>
                <p>Description: {task.description}</p>
                <p>Priority: {task.priority}</p>

                <button>Update Task</button>
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
