import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Title = styled.h1`${tw`text-white`};`;
const Subtitle = styled.h2`${tw`text-white`};`;
const Border = styled.div`${tw`border-solid border-white border-2 p-16 py-4`};`;

const MainHeading = () => (
  <Border>
    <Title>Akil Darjean</Title>
    <Subtitle>Software Developer</Subtitle>
  </Border>
);

export default MainHeading;
