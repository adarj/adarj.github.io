import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Layout from "../Layout"

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
