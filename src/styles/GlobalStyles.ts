import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #ffffffeb;
    font-family: roboto,Helvetica,Arial,sans-serif;
  }

  table {
    color: #4f4f4f;
  }
`;

export default GlobalStyle;
