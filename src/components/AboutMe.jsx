import React from 'react';
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
    <>
      <Heading data-cy="about-me-heading">{heading}</Heading>
      <Text>{text}</Text>
    </>
  );
};

export default AboutMe;
