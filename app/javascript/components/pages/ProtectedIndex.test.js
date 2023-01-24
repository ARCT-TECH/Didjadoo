import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProtectedIndex from "./ProtectedIndex";


describe("<ProtectedIndex />", () => {
  const current_user = {id: 1, name:"Renita", bio:"Hello I am Renita", profilepic:"image.com"}
  const tasks = [{name:"Read a book", priority:"3", description:"reading rainbow", user_id:1}]
  
  const div = document?.createElement("div");
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ProtectedIndex logged_in={true} tasks={tasks} current_user={current_user}/>, div
      </BrowserRouter>
    );
      expect(screen.getByText(`Welcome back, ${current_user.name}`)).toBeInTheDocument();
      expect(screen.getByText(current_user.profilepic)).toBeInTheDocument();
      expect(screen.getByText(current_user.bio)).toBeInTheDocument();
      expect(screen.getByText(`Name: ${tasks[0].name}`)).toBeInTheDocument();
      expect(screen.getByText(`Description: ${tasks[0].description}`)).toBeInTheDocument();
      expect(screen.getByText(`Priority: ${tasks[0].priority}`)).toBeInTheDocument();
      expect(screen.getByText("Update Task")).toBeInTheDocument();
      expect(screen.getByText("Delete Task")).toBeInTheDocument();
      expect(screen.getByText("New Task")).toBeInTheDocument();
      expect(screen.getByText("Edit my Profile")).toBeInTheDocument();
    });
    it("displays a different view when logged out", () => {
      render(
        <BrowserRouter>
          <ProtectedIndex logged_in={false}/>, div
        </BrowserRouter>
      );
        expect(screen.getByText("Please log in or sign up to view your profile")).toBeInTheDocument();
      });
  });

