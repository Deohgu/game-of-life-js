import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ gridSize }) => gridSize}vh;
  height: ${({ gridSize }) => gridSize}vh;
`;

export const GridRow = styled.div`
  display: flex;
  flex: 1;
`;
