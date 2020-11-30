//import style
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
html{
    scroll-behavior: smooth;
}
body{
    min-height:100vh;
    overflow-x: hidden;
    
}

`

export default GlobalStyle