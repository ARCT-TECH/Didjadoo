import React from "react";
import { useParams, NavLink } from "react-router-dom";

const UserShow = ({
  logged_in,
  current_user,
  users,
  tasks,
}) => {

  const { id } = useParams();
  const currentUser = users?.find(
    (user) => user.id === +id
  );
    const userTasks = tasks?.filter((task) => task.user_id === +id);

    return (
      <div>
        <img className="ProfilePic" src={currentUser.profilepic}></img>
        <p>{currentUser.name}</p>
        <div>{currentUser.bio}</div>

        {userTasks.map((task, index) => {
            return (
              <div key={index}>
                <p>Name: {task.name}</p>
                <p>Description: {task.description}</p>
                <p>Priority: {task.priority}</p>
              </div>
            );
          })}
      </div>
    );

};

export default UserShow;
