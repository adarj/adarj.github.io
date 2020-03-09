import React from 'react';
import { shallow } from 'enzyme';

import SEO from './SEO';

describe('SEO', () => {
  it('renders correctly', () => {
    const tree = shallow(<SEO title="John Doe" />);
    expect(tree).toMatchSnapshot();
  });
});

