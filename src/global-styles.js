import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap'); 
    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Varela+Round&display=swap');   
    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
    
    *,*::after,*::before{
        padding: 0;
        margin: 0;
        font-family: "Rubik", sans-serif;
        outline: none;
        color: #b3b3b;
    }

    #root{
        position: relative;
    }
`;
