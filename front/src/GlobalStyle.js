import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body, html {
        height: 100%;
    }
    * {
       box-sizing: border-box;
    }
    a {
        text-decoration:none;
        color: inherit;
    }
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
    }
    h4 {
      font-weight: bold;  
    }
`;

export default GlobalStyle;
