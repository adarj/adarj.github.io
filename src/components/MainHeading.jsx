import React from 'react';
import Hero from 'react-lazy-hero';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import { IconContext } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Title = styled.h1`${tw`uppercase text-white m-0 mb-6 text-6xl font-normal`};`;
const Subtitle = styled.h2`${tw`uppercase text-white m-0 text-3xl`};`;
const Border = styled.div`${tw`border-solid border-white border-3 lg:p-32 lg:py-8 p-6 py-4`};`;
const Links = styled.div`${tw`mt-4`}`;
const Link = styled.a`${tw`px-2`};`;

const MainHeading = (props) => (
  <Hero imageSrc={props.image} color="#000" opacity={0.6} minHeight="70vh">
    <Border>
      <Title data-cy="title">{props.title}</Title>
      <Subtitle data-cy="subtitle">{props.subtitle}</Subtitle>
    </Border>
    <Links>
      <IconContext.Provider value={{ color: "white", size: "1.50em" }}>
        <Link target="_blank" href={props.email} data-cy="email-link"><FaEnvelope /></Link>
        <Link target="_blank" href={props.github} data-cy="github-link"><FaGithub /></Link>
        <Link target="_blank" href={props.linkedin} data-cy="linkedin-link"><FaLinkedin /></Link>
      </IconContext.Provider>
    </Links>
  </Hero>
);

export default MainHeading;