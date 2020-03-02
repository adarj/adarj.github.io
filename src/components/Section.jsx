import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Heading = styled.h1`${tw`m-20`};`;
const Text = styled.p`${tw`m-20`};`;

const Section = (props) => (
  <>
    <Heading data-cy="about-me-heading">{props.heading}</Heading>
    <Text data-cy="about-me-text">{props.text}</Text>
  </>
);

export default Section;