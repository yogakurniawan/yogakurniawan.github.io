import { createGlobalStyle } from './index';
import styledSanitize from 'styled-sanitize';

const GlobalStyles = createGlobalStyle`
  ${styledSanitize}
  * {
    box-sizing: border-box;
  }
  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
