import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UpdateUser from "./UpdateUser";

describe("<UpdateUser />", () => {
  const current_user = {
    id: 1,
    name: "Renita",
    bio: "Hello I am Renita",
    profilepic: "image.com",
  };
  beforeEach(() => {
    render(
      <BrowserRouter>
        <UpdateUser current_user={current_user} />
      </BrowserRouter>
    );
  });
  it("renders the UpdateUser page without errors", () => {
    const element = screen.getByText("Edit Your Profile!");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Edit Your Profile!");
  });
  it(" ", () => {
    const formName = screen.getByText("Name");
    expect(formName.getAttribute("For")).toEqual("name");

    const formAge = screen.getByText("Your Profile Pic");
    expect(formAge.getAttribute("For")).toEqual("profilepic");

    const formEnjoys = screen.getByText("Tell us about you");
    expect(formEnjoys.getAttribute("For")).toEqual("bio");
  });
});
