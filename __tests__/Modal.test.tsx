import React from "react"
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import Modal from "../app/components/Modal"

it("renders without error", () => {
  const close = jest.fn()

  render(<Modal show={true} close={close} />)

  expect(screen.getByTestId("modal-title")).toHaveTextContent(
    "The site isn't ready for prime-time yet",
  )

  const button = screen.getByTestId("modal-close-button")
  fireEvent.click(button)
  expect(close).toHaveBeenCalled()
})
