import React from 'react';
import Hero from 'react-lazy-hero';

// Components
import Layout from '../components/Layout';
import MainHeading from '../components/MainHeading';
import AboutMe from '../components/AboutMe';

// Images
import heroBg from '../images/hero-bg.jpg';

export default () => (
  <>
    <Layout />
    <Hero imageSrc={heroBg} color="#000" opacity={0.6} minHeight="100vh">
      <MainHeading />
    </Hero>
    <AboutMe />
  </>
);
