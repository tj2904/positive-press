import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Head from "../app/head"

describe("Head Component", () => {
  it("renders the title and meta tags correctly", () => {
    // Render the Head component
    const { getByText, container } = render(<Head />)

    // Assert that the title is present with the correct content
    expect(getByText("Positive Press")).toBeInTheDocument()

    // Assert that the meta tags are present with their respective attributes and content
    expect(container.querySelector('meta[name="viewport"]')).toBeInTheDocument()
    expect(
      container.querySelector('meta[name="description"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('meta[property="og:url"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('meta[property="og:type"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('meta[property="og:title"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('meta[property="og:description"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('meta[property="og:image"]'),
    ).toBeInTheDocument()
  })
})
