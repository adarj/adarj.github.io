import React from "react"
import LazyHero from "react-lazy-hero"
import heroBg from "../images/hero-bg.jpg"

const Hero = ({ children }) => (
  <LazyHero imageSrc={heroBg} color="#000" opacity={0.6} minHeight="100vh">
    {children}
  </LazyHero>
)

export default Hero
