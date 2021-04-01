import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none !important;
    color: #000;
    cursor: pointer;
}
  body {
    font-size: 1rem;
    margin: 0;
    font-family: 'Sen', sans-serif;
  }
  input, textarea {
    font-family: 'Sen', sans-serif;
  }
`;

export default GlobalStyle;
