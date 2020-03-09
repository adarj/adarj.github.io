import React from 'react';
import MainHeading from '../components/MainHeading';
import heroBg from '../images/hero-bg.jpg';

const title = "AKIL DARJEAN";
const subtitle = "SOFTWARE DEVELOPER";
const links = {
  email: "mailto:akildarjean@protonmail.com",
  github: "https://github.com/adarj",
  linkedin: "https://linkedin.com/in/adarj"
};

const Hero = () => (
  <MainHeading image={heroBg}
               title={title}
               subtitle={subtitle}
               {...links} />
);

export default Hero;
