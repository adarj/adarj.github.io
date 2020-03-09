import React from 'react';
import { shallow } from 'enzyme';

import MainHeading from './MainHeading';
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

describe('Main Heading', () => {
  it('renders correctly', () => {
    const tree = shallow(<MainHeading image={heroBg} {...text} {...links} />);
    expect(tree).toMatchSnapshot();
  });
});

