import React from "react"
import { render, screen } from "@testing-library/react"
import LandingPage from "./LandingPage"

describe("<LandingPage />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<LandingPage />, div)
    expect(screen.getByText("Didjadoo")).toBeInTheDocument()
    expect(screen.getByText("Sign In")).toBeInTheDocument()
    expect(screen.getByText("Sign Up")).toBeInTheDocument()
  })
})
