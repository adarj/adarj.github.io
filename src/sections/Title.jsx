import React from 'react';
import MainHeading from '../components/MainHeading';
import heroBg from '../images/hero-bg.jpg';

const title = "Akil Darjean";
const subtitle = "Software Developer";

const Title = () => (
  <MainHeading image={heroBg} title={title} subtitle={subtitle} />
);

export default Title;
