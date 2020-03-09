import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

const text = {
  tag: "test-tag",
  heading: "Test Heading",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
        "Etiam id lacus eu enim tristique pulvinar. Aliquam " +
        "hendrerit risus in quam porta ultricies. Duis eget nisl " +
        "est. Nunc accumsan elementum neque non commodo. Nunc nec " +
        "eros lacinia, hendrerit purus in, hendrerit purus. Curabitur " +
        "vehicula tellus quam, in tincidunt lorem molestie non. " +
        "Phasellus et augue sit amet tortor sollicitudin laoreet. " +
        "Quisque rutrum, sem vel rhoncus cursus, dui nunc auctor " +
        "orci, vel auctor lacus tellus non enim. Sed sit amet dui a " +
        "dolor tempus sodales sit amet vel quam. Sed ac sapien non " +
        "ex condimentum pellentesque. Nunc auctor magna orci, id " +
        "interdum nulla ornare at."
};

describe('Section', () => {
  it('renders correctly', () => {
    const tree = shallow(<Section {...text} />);
    expect(tree).toMatchSnapshot();
  });
});
