import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  font-family: 'Roboto', sans-serif;
  background-color: ${colors.background};
  ${'' /* background-image: linear-gradient(to bottom, ${colors.backgroundLight}, ${colors.backgroundDark}); */}
  color: ${colors.text};
  height: 100vh;
  width: 100vw;
}
`;

export { GlobalStyled };
