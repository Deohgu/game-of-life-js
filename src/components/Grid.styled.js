import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ gridStyleSize }) => gridStyleSize}vh;
  height: ${({ gridStyleSize }) => gridStyleSize}vh;
`;

export const GridRow = styled.div`
  display: flex;
  flex: 1;
`;
