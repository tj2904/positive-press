import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Loading from "../app/news/loading"

it("renders without error", () => {
  render(<Loading />)

  expect(screen.getByTestId("loading-page")).toBeInTheDocument()
})
