import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Home"))
    expect(screen.getByText("Home")).toBeInTheDocument()
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Log Out"));
    expect(screen.getByText("Log Out")).toBeInTheDocument();
  });
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Log In"))
    expect(screen.getByText("Log In")).toBeInTheDocument()
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Sign Up"))
    expect(screen.getByText("Sign Up")).toBeInTheDocument()
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("My To Do List"))
    expect(screen.getByText("My To Do List")).toBeInTheDocument()
  })

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("My To Do List"))
    expect(screen.getByText("My To Do List")).toBeInTheDocument()
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("New Task"))
    expect(screen.getByText("New Task")).toBeInTheDocument()
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("My Friends"))
    expect(screen.getByText("My Friends")).toBeInTheDocument()
  })
})