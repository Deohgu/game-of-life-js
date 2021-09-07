import styled from "styled-components";

export const CellStyled = styled.div`
  display: flex;
  flex: 1;
  margin: 1px;
  border: 1px solid hsl(0 0% 70%);
  background-color: ${({ isAlive }) =>
    isAlive === true ? `hsl(0 0% 70%)` : `hsl(0 0% 0%)`};
`;
