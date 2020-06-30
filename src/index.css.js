import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${styledNormalize}

  body {
    font-family: 'Roboto', sans-serif;
  }
 
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li + li {
      margin-left: ${({ theme }) => theme.spacing.xs}px;
    }
  }
`;