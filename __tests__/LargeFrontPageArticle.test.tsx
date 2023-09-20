import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Article from "../app/components/FrontPageLargeArticle"

const mockedNewsResponse = {
  title: "Test Short Title",
  summary:
    "This is the test summary string. This includes more information about the article.",
  vaderTitle: {
    compound: 0.5,
    neg: -0.23,
    neu: 0.1,
    pos: 0.8,
  },
  vaderSummary: {
    compound: 0.6,
    neg: -0.36,
    neu: 0.12,
    pos: 0.78,
  },
  id: "https://www.bbc.co.uk/news/uk-england-leeds-65168813",
  key: "test-key-1",
  published: [2023, 1, 24, 21, 33, 59, 1, 24, 0],
  region: "england",
  source: "bbc",
  imageUrl:
    "https://ichef.bbci.co.uk/news/1024/branded_news/7D7E/production/_129262123_p0fdmdt5.jpg",
}

it("renders FrontPageLargeArticle elements correctly", () => {
  render(<Article {...mockedNewsResponse} />)
  expect(screen.getByTestId("frontPageLargeArticle-title")).toHaveTextContent(
    "Test Short Title",
  )
  expect(screen.getByTestId("frontPageLargeArticle-summary")).toHaveTextContent(
    "This is the test summary string. This includes more information about the article.",
  )
  expect(screen.getByTestId("frontPageLargeArticle-date")).toHaveTextContent(
    "24/1/2023",
  )
})
