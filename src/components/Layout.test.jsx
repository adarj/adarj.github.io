import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = shallow(<Layout title="John Doe" />)
    expect(tree).toMatchSnapshot()
  });
});
