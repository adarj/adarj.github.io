import React from 'react';
import { shallow } from 'enzyme';

import AboutMe from './AboutMe';

describe('Main Heading', () => {
  it('renders correctly', () => {
    const tree = shallow(<AboutMe />)
    expect(tree).toMatchSnapshot()
  });
});
