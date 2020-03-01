import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    overflow-x: hidden;
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .section {
    margin: 50px;
  }
`;
export default GlobalStyle;
