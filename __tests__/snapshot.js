import { render } from "@testing-library/react"
import Header from "../app/components/Header"

it("renders nav bar unchanged", () => {
  const { container } = render(<Header />)
  expect(container).toMatchSnapshot()
})
