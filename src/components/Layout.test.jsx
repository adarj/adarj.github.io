import React from "react"
import { shallow } from "enzyme"

import Layout from "./Layout"

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = shallow(<Layout />)
    expect(tree).toMatchSnapshot()
  })
})
