import React from 'react';
import Hero from '../components/Hero';
import heroBg from '../images/hero-bg.jpg';

const text = {
  title: "Akil Darjean",
  subtitle: "Software Developer"
};

const links = {
  email: "mailto:akildarjean@protonmail.com",
  github: "https://github.com/adarj",
  linkedin: "https://linkedin.com/in/adarj"
};

const Header = () => (
  <MainHeading image={heroBg} {...text} {...links} />
);

export default Hero;
