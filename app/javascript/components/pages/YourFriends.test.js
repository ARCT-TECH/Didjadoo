import React from "react";
import { render, screen } from "@testing-library/react";
import YourFriends from "./YourFriends";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const users = [
  {
    name: "Harry Potter",
    bio: "Little Whinging",
  },
];

describe("<YourFriends />", () => {
  it("renders without crashing", () => {
    const div = document?.createElement("div");
    render(<YourFriends />, div);
    users.forEach((users) => {
      // const userName = screen.getAllByText(users.name);
      expect(screen.getByText("View Profile")).toBeInTheDocument();
    });
  });
});
