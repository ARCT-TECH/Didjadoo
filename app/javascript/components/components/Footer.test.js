
import React from "react"
import { render, screen} from "@testing-library/react"
import Footer from "./Footer"
import { BrowserRouter, NavLink } from "react-router-dom"
import AboutUs from "../pages/AboutUs"
import userEvent from "@testing-library/user-event"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    return(
         <BrowserRouter>
        <Footer />
      </BrowserRouter>, div
    ) 
  })

  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Footer />, div)
  })
})