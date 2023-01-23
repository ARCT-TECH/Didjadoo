import React from "react";
import { render, screen } from "@testing-library/react";
import YourFriends from "./YourFriends";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<YourFriends />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<YourFriends />, div);
    expect(screen.getByText("View Profile")).toBeInTheDocument();
  });
});
// describe("<YourFriends />", () => {
//   it("renders without crashing", () => {
//     const div = document.createElement("div");
//     render(
//       <BrowserRouter>
//         <YourFriends />
//       </BrowserRouter>,
//       div
//     );
//   });
//   it("has clickable links", () => {
//     render(
//       <BrowserRouter>
//         <ApartmentShow />
//       </BrowserRouter>
//     );

//   });
// });
