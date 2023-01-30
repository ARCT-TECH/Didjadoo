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
    // For the user's own profile, we need to filter all tasks down to just ones belonging to the user, checking the foreign key on the task against the id of the user who is logged in. We use filter because we will have an array returned.

    const myTasks = tasks?.filter((task) => task.user_id === current_user.id);

    // Similar logic to find the user whose id matches that of the currently logged in user, however we will use the find() function to return a single instance instead of an array the way filter() does.

    const user = users?.find((user) => user.id === current_user.id);

    // The variable toggle uses state to identify which element to toggle (it was necessary to do it dynamically since we have a toggle on each mapped element), and uses the bang operator to change the state from open to closed. toggleFunction will be called in the onclick.
    const [toggle, setToggle] = useState({});
    function toggleFunction(id) {
      setToggle({
        ...toggle,
        [id]: !toggle[id],
      });
    }

    // The variable modal also uses state to toggle between open and closed. This one does not need to find the id dynamically since we are using the modal on a specific button that is always on the page.
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

{/* This div contains the modal logic, including the button and what will be displayed when the button toggles the modal open (the NewTask.js component is rendered in the modal and will be pass props the same way we would render any component in React) */}

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

{/* By default we are sorting the tasks from highest to lowest priority. .sort() takes arguments a and b, then we can tell it how to sort. Subtracting a from b will return the highest value first. */}

          {myTasks
            ?.sort((a, b) => b.priority - a.priority)
            .map((task, index) => {

// This variable will check for a tasks privacy value so it can conditionally display a lock icon on the task if it has been marked private. It is placed inside the map() function so that it checks for each separate task.

              let privacy = "";
              if (task.private === "false") {
                privacy = "";
              } else {
                privacy = <FontAwesomeIcon icon={faLock}/>;
              }

// This variable checks for the task's priority value so it can conditionally display the correctly colored icon. It is placed inside the map() function so that it checks for each separate task.

              let priority = "";
              if (task.priority === "3") {
                priority = "🔴";
              } else if (task.priority === "2") {
                priority = "🟡";
              } else if (task.priority === "1") {
                priority = "🟢";
              } else {
                priority = "🟢";
              }

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

                    {/* The below div contains the extra information which will expand when the toggle is clicked. It uses in-line styling to check if the specific id being toggled is truthy or falsy, and then sets the css display value to block or none. */}

                    <div
                      className="extra-info"
                      style={{ display: toggle[task.id] ? "block" : "none" }}
                    >
                      <div>{task.description}</div>

                    {/* This line checks if the attribute deadline has a value assigned, so that the word "Deadline" does not show if there is no deadline.  */}

                      {task.deadline && <div>Deadline:{" "}{task.deadline}</div>}

                      <button
                        className="task-button-btn"
                        onClick={() => {

                          // In react, you can use window.confirm to create a confirmation window before carrying out the button's intended action.

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
