import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Box = styled.div`${tw`mx-20 mt-20`};`;

const Section = (props) => (
  <Box>
    {props.children}
  </Box>
);

export default Section;