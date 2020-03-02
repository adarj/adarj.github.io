import React from 'react';
import ReactPageScroller from 'react-page-scroller';

// Components
import Layout from '../components/Layout';

// Sections
import Hero from '../sections/Hero';
import AboutMe from '../sections/AboutMe';

const title = "Akil Darjean";

export default () => (
  <>
    <Layout title={title} />
    <ReactPageScroller>
      <Hero />
      <AboutMe />
    </ReactPageScroller>
  </>
);
