import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

describe('Section', () => {
  it('renders correctly', () => {
    const tree = shallow(<Section heading="Test Section" text="lorem ipsum." />);
    expect(tree).toMatchSnapshot();
  });
});
