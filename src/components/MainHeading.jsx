import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Title = styled.h1`${tw`text-white`};`;
const Subtitle = styled.h2`${tw`text-white`};`;

const MainHeading = () => (
  <>
    <Title>Akil Darjean</Title>
    <Subtitle>Software Developer</Subtitle>
  </>
);

export default MainHeading;
