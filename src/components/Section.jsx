import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Box = styled.div`${tw`mx-20 my-40 text-center`};`;

const Section = (props) => (
  <Box class="container">
    {props.children}
  </Box>
);

export default Section;