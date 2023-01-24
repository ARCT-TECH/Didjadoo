import React from "react";
import { render, screen } from "@testing-library/react";
import YourFriends from "./YourFriends";
import { BrowserRouter } from "react-router-dom";

const users = [
  {
    name: "Harry Potter",
    bio: "Little Whinging",
  },
];

describe("<YourFriends />", () => {
  const div = document?.createElement("div");
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <YourFriends users={users}/>, div
      </BrowserRouter>
    );
    users.forEach((users) => {
      // const userName = screen.getAllByText(users.name);
      expect(screen.getByText("Task one")).toBeInTheDocument();
    });
  });
});
