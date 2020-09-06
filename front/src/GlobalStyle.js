import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body, html {
        height: 100%;
        color: black;
        margin: 0;
        padding: 0;
    }
    html {
        height: -webkit-fill-available;
    }
    body {
        min-height: 100vh;
        min-height: -webkit-fill-available;
    }

    * {
       box-sizing: border-box;
       -webkit-overflow-scrolling: touch;
    }
    a {
        text-decoration:none;
        color: inherit;
        &:hover {
            color: inherit;
        }
    }
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
    }
    h4 {
      font-weight: bold;  
    }
    strong { font-weight: 800; }

`;

export default GlobalStyle;
