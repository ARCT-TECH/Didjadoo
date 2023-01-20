import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import YourFriends from "./pages/YourFriends";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage"
import MyProfile  from ".pages/MyProfile"
import NewTask from ".pages/NewTask"
import ProtectedIndex from "./pages/ProtectedIndex";
import UpdateTask from "./pages/UpdateTask"
import YourFriends from "./pages/YourFriends";
import { render } from "react-dom";
import UserShow from "./pages/UserShow";
import UpdateUser from "./pages/UpdateUser";
import Notfound from "./pages/Notfound";
 

const App = (props) => {
  const [users, setUsers] = useState([]);


<BrowserRouter>
  <Header {...props} />
    <Routes>
      <Route exact path="/" element={<LandingPage {...props} />} />
      <Route path="/users/:id"
          element={<UserShow users={users} />}
        />
      <Route
          path="/yourfriends"
          element={<YourFriends users={users} />}
        />
      <Route
          path="/protectedindex"
          element={<ProtectedIndex users={users} {...props} createTask={createTask} updateTask={updateTask}/>}
        />
      <Route
          path="/newtask"
          element={
            <NewTask createTask={createTask} {...props} />
          }
        />
        <Route
          path="/aboutus"
          element={
            <AboutUs />
          }
        />
      <Route path="/edittask/:id" element={<UpdateTask users={users} updateTask={updateTask} {...props}/>}  />

      <Route
          path="/updateuser/:id"
          element={
            <UpdateUser updateUser={updateUser} {...props} />
            
          }
        />
      <Route element={<NotFound />} />
  
    </Routes>
      <Footer />
  </BrowserRouter>
}
export default App;
