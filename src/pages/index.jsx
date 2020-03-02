import React from 'react';
import ReactPageScroller from 'react-page-scroller';

// Components
import Layout from '../components/Layout';
import MainHeading from '../components/MainHeading';
import AboutMe from '../components/AboutMe';

// Images
import heroBg from '../images/hero-bg.jpg';

export default () => (
  <>
    <Layout />
    <ReactPageScroller>
      <MainHeading image={heroBg}/>
      <AboutMe />
    </ReactPageScroller>
  </>
);
