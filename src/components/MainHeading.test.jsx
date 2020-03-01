import React from 'react';
import { shallow } from 'enzyme';

import MainHeading from './MainHeading';
import heroBg from '../images/hero-bg.jpg';

describe('Main Heading', () => {
  it('renders correctly', () => {
    const tree = shallow(<MainHeading heroBg={heroBg} />)
    expect(tree).toMatchSnapshot()
  });
});
