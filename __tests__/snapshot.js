import { render } from "@testing-library/react"
import Header from "../app/components/Header"
import PositivityRankingBar from "../app/components/PositivityRankingBar"

it("renders nav bar unchanged", () => {
  const { container } = render(<Header />)
  expect(container).toMatchSnapshot()
})

it("renders PostivityRankingBar with green", () => {
const { greenBar } = render(<PositivityRankingBar props={0.88} />)
expect(greenBar).toMatchSnapshot()
})

it("renders PostivityRankingBar with red", () => {
  const { redBar } = render(<PositivityRankingBar props={-0.88} />)
  expect(redBar).toMatchSnapshot()
})
