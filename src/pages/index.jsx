import React from 'react';

// Components
import Layout from '../components/Layout';

// Sections
import MainHeading from '../sections/MainHeading';
import AboutMe from '../sections/AboutMe';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import Certificates from '../sections/Certificates';
import Projects from '../sections/Projects';

const title = "Akil Darjean";

export default () => (
  <>
    <Layout title={title} />
    <MainHeading />
    <AboutMe />
    <Experience />
    <Skills />
    <Certificates />
    <Projects />
  </>
);
