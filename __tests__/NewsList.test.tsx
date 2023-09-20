import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import NewsList from "../app/components/NewsList"

const mockedNewsResponse = {
  newsFeed: [
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
      published: "Wed,23rd,June,2022,10:33:27",
      region: "england",
      source: "bbc",
      imageUrl:
        "https://ichef.bbci.co.uk/news/1024/branded_news/7D7E/production/_129262123_p0fdmdt5.jpg",
    },
    {
      title: "Test Short Title 2",
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
      key: "test-key-2",
      published: "Wed,23rd,June,2022,10:33:27",
      region: "england",
      source: "bbc",
      imageUrl:
        "https://ichef.bbci.co.uk/news/1024/branded_news/7D7E/production/_129262123_p0fdmdt5.jpg",
    },
  ],
}

it("renders without error", () => {
  render(<NewsList {...mockedNewsResponse} />)

  expect(screen.getByText("Test Short Title")).toBeInTheDocument()
  expect(screen.getByText("Test Short Title 2")).toBeInTheDocument()
})
