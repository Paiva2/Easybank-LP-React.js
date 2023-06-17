import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth
  }

  #root {
    height: 100vh;
  }

  body {
    font-family: 'Public Sans', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}
`

export default GlobalStyle
