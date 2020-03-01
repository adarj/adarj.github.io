import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Title = styled.h1`${tw`text-white`};`;
const Subtitle = styled.h2`${tw`text-white`};`;
const Border = styled.div`${tw`border-solid border-white border-2 lg:p-32 lg:py-8 p-16 py-4`};`;

const MainHeading = () => {
  const title = "Akil Darjean";
  const subtitle = "Software Developer";

  return (
    <Border>
      <Title data-cy="title">{title}</Title>
      <Subtitle data-cy="subtitle">{subtitle}</Subtitle>
    </Border>
  );
};

export default MainHeading;
