import React from 'react';

// Components
import Layout from '../components/Layout';
import MainHeading from '../components/MainHeading';
import AboutMe from '../components/AboutMe';

// Images
import heroBg from '../images/hero-bg.jpg';

export default () => (
  <>
    <Layout />
    <MainHeading heroBg={heroBg}/>
    <AboutMe />
  </>
);
