import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Hero from "../Hero"

describe("Hero", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Hero>
          <h1>Hello, world!</h1>
        </Hero>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
