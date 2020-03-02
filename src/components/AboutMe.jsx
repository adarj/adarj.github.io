import React from 'react';
import Hero from 'react-lazy-hero';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Heading = styled.h1`${tw`m-20`};`;
const Text = styled.p`${tw`m-20`};`;

const AboutMe = () => {
  const heading = "About Me";
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
               "Etiam id lacus eu enim tristique pulvinar. Aliquam " +
               "hendrerit risus in quam porta ultricies. Duis eget nisl " +
               "est. Nunc accumsan elementum neque non commodo. Nunc nec " +
               "eros lacinia, hendrerit purus in, hendrerit purus. Curabitur " +
               "vehicula tellus quam, in tincidunt lorem molestie non. " +
               "Phasellus et augue sit amet tortor sollicitudin laoreet. " +
               "Quisque rutrum, sem vel rhoncus cursus, dui nunc auctor " +
               "orci, vel auctor lacus tellus non enim. Sed sit amet dui a " +
               "dolor tempus sodales sit amet vel quam. Sed ac sapien non " +
               "ex condimentum pellentesque. Nunc auctor magna orci, id " +
               "interdum nulla ornare at.";

  return (
    <Hero opacity={0.0} minHeight="100vh">
      <Heading data-cy="about-me-heading">{heading}</Heading>
      <Text data-cy="about-me-text">{text}</Text>
    </Hero>
  );
};

export default AboutMe;
