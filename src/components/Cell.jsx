import React from "react";

import { CellStyled } from "./Cell.styled";

const Cell = ({ isAlive, cellClickHandler }) => {
  return <CellStyled onClick={cellClickHandler} isAlive={isAlive} />;
};

export default Cell;
