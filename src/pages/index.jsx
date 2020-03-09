import React from 'react';

// Components
import Layout from '../components/Layout';

// Sections
import Hero from '../sections/Hero';
import AboutMe from '../sections/AboutMe';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import Certificates from '../sections/Certificates';
import Projects from '../sections/Projects';

const title = "Akil Darjean";

export default () => (
  <>
    <Layout title={title} />
    <Hero />
    <AboutMe />
    <Experience />
    <Skills />
    <Certificates />
    <Projects />
  </>
);
