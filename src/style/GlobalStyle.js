import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, 'Roboto',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, 'Roboto',
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;
