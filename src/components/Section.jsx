import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Container = styled.div`${tw`mx-20 mt-20`};`;

const Section = (props) => (
  <Container>
    {props.children}
  </Container>
);

export default Section;