import React from 'react';
import { shallow } from 'enzyme';

import MainHeading from './MainHeading';

describe('Main Heading', () => {
  it('renders correctly', () => {
    const tree = shallow(<MainHeading />)
    expect(tree).toMatchSnapshot()
  });
});
