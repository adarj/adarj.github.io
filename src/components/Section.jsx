import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Box = styled.div`${tw`mx-20 mt-20 mb-32`};`;
const Header = styled.h2`${tw`uppercase`};`;

const Section = (props) => (
  <Box>
    <Header>{props.header}</Header>
    {props.children}
  </Box>
);

export default Section;