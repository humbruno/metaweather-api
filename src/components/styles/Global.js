import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  font-family: "Nunito", sans-serif; /* weights imported: 400, 700 */
}

body {
  background-color: #100E1D;

  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
    color: #e7e7eb;

    display: inline;
    position: relative;
    
    &::before {
    content: "";
    background: rgba(226, 91, 136, 0.8);
    position: absolute;
    left: -3%;
    bottom: 3px;
    height: 8px;
    width: 110%;
    z-index: -1;
    border-radius: 35px;
  }
}

`;

export default GlobalStyles;
