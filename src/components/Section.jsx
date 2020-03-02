import React from 'react';
import Hero from 'react-lazy-hero';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Heading = styled.h1`${tw`m-20`};`;
const Text = styled.p`${tw`m-20`};`;

const Section = (props) => (
  <Hero opacity={0.0} minHeight="100vh">
    <Heading data-cy="about-me-heading">{props.heading}</Heading>
    <Text data-cy="about-me-text">{props.text}</Text>
  </Hero>
);

export default Section;