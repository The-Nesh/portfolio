import {createGlobalStyle} from 'styled-components';

import font from '../data/font/poppins-v13-latin-regular.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${font});
  }
  html {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: lightgoldenrodyellow;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: lightgoldenrodyellow;
    text-decoration: none;
  }
`;

export default Typography;