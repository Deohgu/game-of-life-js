import React from "react";

import { CellStyled } from "./Cell.styled";

const Cell = ({ isAlive }) => {
  return <CellStyled isAlive={isAlive} />;
};

export default Cell;
