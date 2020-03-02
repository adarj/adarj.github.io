import React from 'react';
import Hero from 'react-lazy-hero';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Box = styled.div`${tw`mx-20 text-center`};`;

const Section = (props) => (
  <Hero opacity={0.0} minHeight="100vh">
    <Box class="container">
      {props.children}
    </Box>
  </Hero>
);

export default Section;