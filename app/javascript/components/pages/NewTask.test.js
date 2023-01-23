import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NewTask from "./NewTask"

describe("<NewTask />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <NewTask />
            </BrowserRouter>
        )
    })
    it("renders the NewTask page without errors", () => {
        const element = screen.getByText("Create a new task")
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent("Create a new task")
    })
    it("has a form to name, priority, description, deadline ", () => {
        const formName = screen.getByText("Name")
        expect(formName.getAttribute("For")).toEqual("name")

        const formAge = screen.getByText("Priority")
        expect(formAge.getAttribute("For")).toEqual("priority")
    
        const formEnjoys = screen.getByText("Description")
        expect(formEnjoys.getAttribute("For")).toEqual("description")
    
        const formImage = screen.getByText("Deadline")
        expect(formImage.getAttribute("For")).toEqual("deadline")
    })
})