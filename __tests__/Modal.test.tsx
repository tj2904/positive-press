import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Modal from "../app/components/Modal"

it("renders without error", () => {
  render(<Modal show={true} />)

  expect(screen.getByTestId("modal-title")).toHaveTextContent(
    "The site isn't ready for prime-time yet",
  )
})
