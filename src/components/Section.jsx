import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Box = styled.div`${tw`container mx-20 mt-20 mb-32`};`;

const Section = (props) => (
  <Box>
    {props.children}
  </Box>
);

export default Section;