import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import NewsLayout from "../app/news/layout"

describe("NewsLayout", () => {
  it("renders children and includes the Header component", () => {
    // Mock the children content
    const childrenContent = <div data-testid="test-children">Child content</div>

    // Render the NewsLayout component with the mocked children
    const { getByTestId } = render(<NewsLayout>{childrenContent}</NewsLayout>)

    expect(screen.getByTestId("nav-Home")).toHaveTextContent("Home")

    const childContentElement = getByTestId("test-children")
    expect(childContentElement).toBeInTheDocument()
  })
})
