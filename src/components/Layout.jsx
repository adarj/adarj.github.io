import React from 'react';
import SEO from './SEO';
import GlobalStyle from '../styles/global';

const Layout = (props) => (
  <>
    <SEO title={props.title} />
    <GlobalStyle />
  </>
);

export default Layout;
