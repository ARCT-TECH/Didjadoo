import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import UpdateTask from "./UpdateTask"


describe("<UpdateTask />", () => {
    const current_user = {id: 1, name:"Renita", bio:"Hello I am Renita", profilepic:"image.com"}
    const tasks = [{name:"Read a book", priority:"3", description:"reading rainbow", user_id:1, id:1}]

    beforeEach(() => {
        const div = document.createElement("div")
        render(
            <MemoryRouter initialEntries={["/updatetask/1"]}>
                 <Routes>
                    <Route path="/updatetask/:id" element={ <UpdateTask tasks={tasks} />} />
                </Routes>
             </MemoryRouter>, div
           
        )
    })
    it("renders the UpdateTask page without errors", () => {
        const element = screen.getByText("Edit Task")
        expect(screen.getByText("Edit Task")).toBeInTheDocument()
        expect(element).toHaveTextContent("Edit Task")
    })

    it("has a form with entries for name, priority, description, deadline, progress ", () => {
        const formName = screen.getByText("Name")
        expect(formName.getAttribute("For")).toEqual("name")

        const formPriority = screen.getByText("Priority")
        expect(formPriority.getAttribute("For")).toEqual("priority")
    
        const formDescription = screen.getByText("Description")
        expect(formDescription.getAttribute("For")).toEqual("description")
    
        const formDeadline = screen.getByText("Deadline")
        expect(formDeadline.getAttribute("For")).toEqual("deadline")
    })
})