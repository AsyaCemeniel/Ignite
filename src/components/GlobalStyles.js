import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #657eac;
    }
}

body {
    font-family: 'Scada', sans-serif;
    width: 100%;
}

h2 {
    font-family: 'Fredericka the Great', cursive;
    font-size: 3rem;
    color: #394964;
}

h3 {
    font-size: 1.5rem;
    color: #333;
    padding: 1.5rem 0rem;
}

p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
}

a {
    text-decoration: none;
    color: #333;
}

img {
    display: block;
}

input {
    font-weight: bold;
    font-family: 'Scada', sans-serif;
}

`;

export default GlobalStyles;
