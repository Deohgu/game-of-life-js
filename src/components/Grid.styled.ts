import styled from "styled-components";

type GridContainerProps = {
  gridStyleSize: number;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${({ gridStyleSize }) => gridStyleSize}vh;
  height: ${({ gridStyleSize }) => gridStyleSize}vh;
  outline: 1px solid hsl(0 0% 70%);
`;

export const GridRow = styled.div`
  display: flex;
  flex: 1;
`;
