import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export const GameContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 150px;
`;

export const Button = styled.button`
  width: 90px;
  height: 90px;
  background-color: hsl(0 0% 70%);
  font-size: 15px;
  font-weight: 600;
`;

export const GlobalStyle = createGlobalStyle`
  
  // Resetting margins, paddings, and borders
  html, body,
  h1, h2, h3, h4, h5, h6,
  a, p, span,
  em, small, strong,
  sub, sup,
  mark, del, ins, strike,
  abbr, dfn,
  blockquote, q, cite,
  code, pre,
  ol, ul, li, dl, dt, dd,
  div, section, article,
  main, aside, nav,
  header, hgroup, footer,
  img, figure, figcaption,
  address, time,
  audio, video,
  canvas, iframe,
  details, summary,
  fieldset, form, label, legend,
  table, caption,
  tbody, tfoot, thead,
  tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
  }
  // typography
  html {
    font-size: 100%;
  }
  body {
    overflow-x: hidden;
    width: 100%;
    min-height: 100%;
    font-size: 1rem;
    margin: 0;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Quicksand', sans-serif;
  }
  input, textarea, button {
    font-family: inherit
  }
  a{
    text-decoration: none;
  }
  // Layout & box sizing
  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }
  * {
    box-sizing: border-box;
  }
  *:before,
  *:after {
    box-sizing: inherit;
  }
  // Resetting specific element styles
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  ol,
  ul {
    list-style: none;
  }
  img,
  video {
    max-width: 100%;
  }
  img {
    border-style: none;
    max-width: 100%;
    height: auto;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: "";
    content: none;
  }
  // Attributes & states
  [hidden] {
    display: none !important;
  }
  [disabled] {
    cursor: not-allowed;
  }
  :focus:not(:focus-visible) {
    outline: none;
  }
`;
