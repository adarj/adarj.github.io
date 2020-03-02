import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Box = styled.div`${tw`mx-20 mt-20 mb-32`};`;

const Section = (props) => (
  <Box class="container">
    {props.children}
  </Box>
);

export default Section;