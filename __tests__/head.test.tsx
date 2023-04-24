import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Header from "../app/components/Header"

it("renders Nav Links correctly", () => {
  render(<Header />)

  expect(screen.getByTestId("nav-Home").textContent).toEqual("Home")

  expect(screen.getByTestId("nav-Top").textContent).toEqual("Top")

  expect(screen.getByTestId("nav-England").textContent).toEqual("England")

  expect(screen.getByTestId("nav-World").textContent).toEqual("World")

  expect(screen.getByTestId("nav-Tech").textContent).toEqual("Tech")

  expect(screen.getByTestId("nav-Ents & Arts").textContent).toEqual(
    "Ents & Arts",
  )

  expect(screen.getByTestId("nav-Education").textContent).toEqual("Education")

  expect(screen.getByTestId("nav-Business").textContent).toEqual("Business")
})
