import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  font: inherit;
  letter-spacing: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 110%;
}

h1 {
  font-size: 54px;
}

h2 {
  font-size: 42px;
}

h3 {
  font-size: 32px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 20px;
}

h6 {
  font-size: 18px;
}
`
