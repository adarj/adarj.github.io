import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = (props) => (
  <Helmet>
    <html lang="en" />
    <title>{props.title}</title>
  </Helmet>
);

export default SEO;
