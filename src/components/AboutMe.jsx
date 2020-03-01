import React from 'react';

const AboutMe = () => {
  const heading = "About Me";
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
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
               "interdum nulla ornare at.";

  return (
    <div class="section">
      <h1 data-cy="about-me-heading">{heading}</h1>
      <p>{text}</p>
    </div>
  );
};

export default AboutMe;
