import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Josefin Sans', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-image: unset;
    background-color: unset;
    border: none;
    border-radius: 83px;
    cursor: pointer;
    color: ${theme.colors.font};
  }
  
  section {
    padding: 100px 0;
    color: ${theme.colors.font};
  }
  
  section:nth-of-type(odd) {
    background-color: ${theme.colors.secondaryBg};
  }
  section:nth-of-type(even) {
    background-color: ${theme.colors.primaryBg};
  }
  
  h3 {
    color: var(--title, #D9F2F2);
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  
  p {
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  }
  
`