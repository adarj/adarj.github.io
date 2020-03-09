import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Container = styled.div`${tw`mx-20 mt-20`};`;
const Heading = styled.h2`${tw`uppercase`};`;
const Body = styled.p`${tw``};`;

const Section = (props) => (
  <Container>
    <Heading data-cy={props.tag}>{props.heading}</Heading>
    <Body>{props.body}</Body>
  </Container>
);

export default Section;