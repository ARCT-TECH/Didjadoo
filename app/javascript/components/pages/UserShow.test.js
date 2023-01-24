import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import UserShow from "./UserShow";


describe("<UserShow />", () => {
  const users = [{id: 1, name:"Renita", bio:"Hello I am Renita", profilepic:"image.com"}]
  const tasks = [{name:"Read a book", priority:"3", description:"reading rainbow", user_id:1}]
  
  const div = document?.createElement("div");
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/usershow/1"]}>
        <Routes>
            <Route
            path="/usershow/:id"
            element={<UserShow users={users} tasks={tasks} />} />
        </Routes>
        </MemoryRouter>
    );
      expect(screen.getByText(users[0].name)).toBeInTheDocument();
      expect(screen.getByText(users[0].bio)).toBeInTheDocument();
      expect(screen.getByText(`Name: ${tasks[0].name}`)).toBeInTheDocument();
      expect(screen.getByText(`Description: ${tasks[0].description}`)).toBeInTheDocument();
      expect(screen.getByText(`Priority: ${tasks[0].priority}`)).toBeInTheDocument();
    });
  });

