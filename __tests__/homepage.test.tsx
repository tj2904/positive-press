import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Home from "../app/page" // Import the Head component

it("renders without error", () => {
  // Render the Head component
  render(<Home />)

  expect(screen.getByTestId("homepage-main-button")).toBeInTheDocument()
})
