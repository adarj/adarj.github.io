import React from 'react';
import ReactPageScroller from 'react-page-scroller';

// Components
import Layout from '../components/Layout';

// Sections
import MainHeading from '../sections/MainHeading';
import AboutMe from '../sections/AboutMe';

// Images
import heroBg from '../images/hero-bg.jpg';

export default () => (
  <>
    <Layout />
    <ReactPageScroller>
      <MainHeading image={heroBg} />
      <AboutMe />
    </ReactPageScroller>
  </>
);
