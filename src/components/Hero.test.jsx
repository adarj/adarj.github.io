import React from 'react';
import { shallow } from 'enzyme';

import Hero from './Hero';
import heroBg from '../images/hero-bg.jpg';

const text = {
  title: "John Doe",
  subtitle: "Lorem Ipsum"
};

const links = {
  email: "mailto:john.doe@mail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = shallow(<Hero image={heroBg} {...text} {...links} />);
    expect(tree).toMatchSnapshot();
  });
});

