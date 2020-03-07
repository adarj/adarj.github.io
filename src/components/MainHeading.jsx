import React from 'react';
import Hero from 'react-lazy-hero';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Title = styled.h1`${tw`text-white m-0 mb-6 text-6xl font-normal`};`;
const Subtitle = styled.h2`${tw`text-white m-0 text-3xl`};`;
const Border = styled.div`${tw`border-solid border-white border-3 lg:p-32 lg:py-8 p-6 py-4`};`;
const Links = styled.div`${tw``};`;

const MainHeading = (props) => (
  <Hero imageSrc={props.image} color="#000" opacity={0.6} minHeight="70vh">
    <Border>
      <Title data-cy="title">{props.title}</Title>
      <Subtitle data-cy="subtitle">{props.subtitle}</Subtitle>
    </Border>
    <Links>
      <FaEnvelope data-cy="email-link" />
      <FaGithub data-cy="github-link" />
      <FaLinkedin data-cy="linkedin-link" />
    </Links>
  </Hero>
);

export default MainHeading;