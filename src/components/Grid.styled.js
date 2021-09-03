import styled from "styled-components";

export const GridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: ${({ gridSize }) => gridSize}vh;
  height: ${({ gridSize }) => gridSize}vh;
`;
