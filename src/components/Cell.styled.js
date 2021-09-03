import styled from "styled-components";

const marginVar = 1;

export const CellStyled = styled.div`
  margin: ${marginVar}px;
  width: ${({ width, divisor }) =>
    `calc(${width}vh / ${divisor} - ${marginVar * 2}px)`};
  height: ${({ height, divisor }) =>
    `calc(${height}vh / ${divisor} - ${marginVar * 2}px)`};
  background-color: hsl(0 0% 70%);
`;
