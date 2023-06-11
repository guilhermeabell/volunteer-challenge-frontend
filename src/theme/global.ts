import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  :root {
    --green--color: #018762;
    --green--light--color: #B0E0D3;
    --light--color: #FFF;
    --dark--color: #000000;
    --dark--medium--color: #1F1F1F;
    --gray--color: #EEEEEE;
    --dark--gray--color: #333;
    --gray--medium--color: #808080;
    --gray--light--color: #515151;

    line-height: 1.5;
    font-weight: 400;
    background-color: #fff;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Nunito', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    text-decoration: none;
  }

 `

export default GlobalStyle
