import React from "react";

import { CellStyled } from "./Cell.styled";

const Cell = () => {
  return <CellStyled width={80} height={80} divisor={8}></CellStyled>;
};

export default Cell;
