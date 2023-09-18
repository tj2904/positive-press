import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import TopNewsHeadlineList from "../app/components/TopNewsHeadlineList"

const mockedNewsResponse = {
  data: [
    {
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
    },
    {
      title: "Second Test Short Title",
      summary:
        "This is the second test summary string. This includes more information about the article.",
      vaderTitle: {
        compound: 0.7,
        neg: -0.34,
        neu: 0.7,
        pos: 0.3,
      },
      vaderSummary: {
        compound: 0.3,
        neg: -0.55,
        neu: 0.32,
        pos: 0.22,
      },
      id: "https://www.bbc.co.uk/news/uk-england-leeds-xxxx",
      key: "test-key-2",
      published: [2023, 2, 20, 20, 31, 55, 1, 22, 0],
      region: "england",
      source: "bbc",
      imageUrl:
        "https://ichef.bbci.co.uk/news/1024/branded_news/7D7E/production/_129262123_p0fdmdt5.jpg",
    },
  ],
}

it("renders without error", () => {
  render(<TopNewsHeadlineList {...mockedNewsResponse} />)

  expect(screen.getByTestId("topNewsHeadlineList-div-0")).toBeInTheDocument()
  expect(screen.getByTestId("topNewsHeadlineList-rating-0")).toHaveTextContent(
    "60.0%",
  )
  expect(screen.getByTestId("topNewsHeadlineList-link-0")).toHaveTextContent(
    "Read more...",
  )
  expect(screen.getByTestId("topNewsHeadlineList-div-1")).toBeInTheDocument()
  expect(screen.getByTestId("topNewsHeadlineList-rating-1")).toHaveTextContent(
    "30.0%",
  )
  expect(screen.getByTestId("topNewsHeadlineList-link-1")).toHaveTextContent(
    "Read more...",
  )
})
