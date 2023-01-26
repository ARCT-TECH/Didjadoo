import React from "react"
import { render, screen } from "@testing-library/react"
import AboutUs from "./AboutUs"

describe("<AboutUs />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<AboutUs />, div)
    expect(screen.getByText("ARCT-TECH")).toBeInTheDocument()
    expect(screen.getByText("A team of Didja-dooers, here to help you achieve your goals!")).toBeInTheDocument()
    expect(screen.getByText("Anthony: (Anthony's Bio)")).toBeInTheDocument()
    expect(screen.getByText("Renita: (Renita's Bio)")).toBeInTheDocument()
    expect(screen.getByText("Ciani: (Ciani's Bio)")).toBeInTheDocument()
    expect(screen.getByText("Tabi: (Tabi's Bio)")).toBeInTheDocument()
  })
})
