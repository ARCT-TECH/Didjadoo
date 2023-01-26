import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import YourFriends from "./pages/YourFriends";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage";
import NewTask from "./pages/NewTask";
import ProtectedIndex from "./pages/ProtectedIndex";
import UpdateTask from "./pages/UpdateTask";
import UserShow from "./pages/UserShow";
import UpdateUser from "./pages/UpdateUser";
import NotFound from "./pages/NotFound";
import "./App.css"

const App = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => readUsers(), []);
  useEffect(() => readTasks(), []);

  const readUsers = () => {
    fetch("/users")
      .then((response) => response.json())
      .then((payload) => {
        setUsers(payload);
      })
      .catch((error) => console.log(error));
  };
  const updateUser = (user, id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readUsers())
      .catch((errors) => console.log("User update errors:", errors));
  };

  const [tasks, setTasks] = useState([]);

  const readTasks = () => {
    fetch("/tasks")
      .then((response) => response.json())
      .then((payload) => {
        setTasks(payload);
      })
      .catch((error) => console.log(error));
  };

  const createTask = (task) => {
    console.log(task);
    fetch("http://localhost:3000/tasks", {
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readTasks())
      .catch((errors) => console.log("Task create errors:", errors));
  };

  const updateTask = (task, id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readTasks())
      .catch((errors) => console.log("Task update errors:", errors));
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => readTasks())
      .catch((errors) => console.log("delete errors:", errors));
  };
  return (
    <BrowserRouter>
      <Header {...props} />
      <div className="mainbody">
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage {...props} users={users} />}
        />
        <Route
          path="/usershow/:id"
          element={<UserShow users={users} tasks={tasks} />}
        />
        <Route path="/yourfriends" element={<YourFriends users={users} />} />
        <Route
          path="/protectedindex"
          element={
            <ProtectedIndex
              {...props}
              users={users}
              tasks={tasks}
              createTask={createTask}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          }
        />
        <Route
          path="/newtask"
          element={<NewTask createTask={createTask} {...props} />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/updatetask/:id"
          element={
            <UpdateTask tasks={tasks} updateTask={updateTask} {...props} />
          }
        />
         <Route
          path="/updateuser/:id"
          element={
            <UpdateUser users={users} updateUser={updateUser} {...props} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
