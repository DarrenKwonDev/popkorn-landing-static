import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
       box-sizing: border-box;
    }
    a {
        text-decoration:none;
        color: inherit;
    }
    body {
        font-family: 'Segoe UI', Roboto;
        margin: 0;
        padding: 0;
    }
    h4 {
      font-weight: bold;  
    }
`;

export default GlobalStyle;
