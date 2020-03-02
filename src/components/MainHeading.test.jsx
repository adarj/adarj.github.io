import React from 'react';
import { shallow } from 'enzyme';

import MainHeading from './MainHeading';
import heroBg from '../images/hero-bg.jpg';

describe('Main Heading', () => {
  it('renders correctly', () => {
    const tree = shallow(<MainHeading image={heroBg} title="John Doe" subtitle="Lorem Ipsum" />);
    expect(tree).toMatchSnapshot();
  });
});

