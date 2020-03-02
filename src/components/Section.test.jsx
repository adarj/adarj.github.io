import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

describe('Section', () => {
  it('renders correctly', () => {
    const tree = shallow(<Section><p>Hello, world!</p></Section>);
    expect(tree).toMatchSnapshot();
  });
});
