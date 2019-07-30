import React from "react"
import Layout from "../components/Layout"
import LazyHero from "react-lazy-hero"
import heroBg from "../images/hero-bg.jpg"

export default () => (
  <>
    <Layout />
    <LazyHero
      imageSrc={heroBg}
      color="#000"
      opacity="0.6"
      minHeight="100vh"
    ></LazyHero>
  </>
)
