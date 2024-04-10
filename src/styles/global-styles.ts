import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components/macro';
import '@fontsource/dm-sans/900.css';
import '@fontsource/dm-sans/400.css';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  .full-width {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .container {
    max-width: 1280px; 
    margin: 0 auto; 
    width: 100%; 
    padding: 0 20px; 
}
`;

interface TitleProps {
  fontSize?: string;
  color?: string;
}

export const Title = styled.p<TitleProps>`
  font-family: 'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: ${props => props.fontSize || '2rem'};
  color: ${props => props.color || 'red'};
`;
