import React from 'react';
import Hero from 'react-lazy-hero';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Title = styled.h1`${tw`text-white m-0 mb-6 text-6xl font-normal`};`;
const Subtitle = styled.h2`${tw`text-white m-0 text-3xl`};`;
const Border = styled.div`${tw`border-solid border-white border-3 lg:p-32 lg:py-8 p-6 py-4`};`;

const MainHeading = (props) => {
  const title = "Akil Darjean";
  const subtitle = "Software Developer";

  return (
    <Hero imageSrc={props.image} color="#000" opacity={0.6} minHeight="100vh">
      <Border>
        <Title data-cy="title">{title}</Title>
        <Subtitle data-cy="subtitle">{subtitle}</Subtitle>
      </Border>
    </Hero>
  );
};

export default MainHeading;
