import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root{
  --netflix-color: hsl(357, 92%, 47%);
  --white-color: hsl(0, 0%, 100%);
}

html{
    font-size: 62.5%;
}


body{
    font-family: 'Martel Sans', sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    background-color:hsl(0, 0%, 8%);
    color: white;
}

ul{
    list-style-type: none;
}

a{
    text-decoration: none;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyles;
