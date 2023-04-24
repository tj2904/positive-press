import { percentage } from "../app/utils/formatting";

it("percentage formatting works to 0 dp", () => {
    expect(percentage("0.1234")).toEqual("12%")
 })

 
it("percentage formatting works to 2 dp", () => {
  expect(percentage("0.1234", 2)).toEqual("12.34%")
})

it("percentage formatting works with passed dp value", () => {
  expect(percentage("0.123456789", 5)).toEqual("12.34568%")
})
