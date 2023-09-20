import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import RootLayout from "../app/layout"

describe("RootLayout", () => {
  it("renders children and applies the correct language and background class", () => {
    // Mock the children content
    const childrenContent = <div data-testid="test-children">Child content</div>

    // Render the RootLayout component with the mocked children
    const { container, getByTestId } = render(
      <RootLayout>{childrenContent}</RootLayout>,
    )

    const htmlElement = container.querySelector("html")
    const bodyElement = container.querySelector("body")

    expect(htmlElement).toHaveAttribute("lang", "en")
    expect(bodyElement).toHaveClass("bg-neutral-50")

    // Assert that the children content is rendered
    const childContentElement = getByTestId("test-children")
    expect(childContentElement).toBeInTheDocument()
  })
})
