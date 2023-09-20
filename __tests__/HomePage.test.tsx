import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Home from "../app/page"

it("renders without error", () => {
  render(<Home />)

  expect(screen.getByTestId("homepage-main-button")).toBeInTheDocument()
  expect(screen.getByTestId("homepage-main-button")).toHaveTextContent(
    "Launch the App",
  )
})
