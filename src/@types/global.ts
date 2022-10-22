import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
    }
    body, input, textarea, button{
        font-family: 'Inter', sans-serif;
        font-weight: 140;
        font: 1rem;
    }    
`