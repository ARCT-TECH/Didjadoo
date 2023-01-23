import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    );
  });
  it("Renders a clickable links when signed out", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toBeInTheDocument();
    userEvent.click(screen.getByText("Log In"));
    expect(screen.getByText("Log In")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });
  it("Renders clickable links when signed in", () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={true} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Log Out"));
    expect(screen.getByText("Log Out")).toBeInTheDocument();
    userEvent.click(screen.getByText("My To Do List"));
    expect(screen.getByText("My To Do List")).toBeInTheDocument();
    userEvent.click(screen.getByText("New Task"));
    expect(screen.getByText("New Task")).toBeInTheDocument();
    userEvent.click(screen.getByText("My Friends"));
    expect(screen.getByText("My Friends")).toBeInTheDocument();
  });
});
