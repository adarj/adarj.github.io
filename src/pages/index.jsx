import React from 'react';
import ReactPageScroller from 'react-page-scroller';

// Components
import Layout from '../components/Layout';

// Sections
import Title from '../sections/Title';
import AboutMe from '../sections/AboutMe';

export default () => (
  <>
    <Layout />
    <ReactPageScroller>
      <Title />
      <AboutMe />
    </ReactPageScroller>
  </>
);
