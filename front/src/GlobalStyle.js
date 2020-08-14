import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    a {
        text-decoration:none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif, 'Segoe UI', Roboto;
    }
`;

export default GlobalStyle;
