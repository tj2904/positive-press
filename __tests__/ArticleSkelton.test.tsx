import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ArticleSkelton from "../app/components/ArticleSkelton"

it("renders without error", () => {
  render(<ArticleSkelton />)

  expect(screen.getByTestId("articleSketelon-div")).toBeInTheDocument()
})
