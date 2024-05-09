import { styleVar } from "./styleVariables";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    
    color: ${styleVar.grey6};
    font-family: Roboto, system-ui, Helvetica, sans-serif;
    font-weight: 400;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  
    margin: 0;
    padding: 0;
  
    list-style-type: none;
  }
`;

export { GlobalStyle };
