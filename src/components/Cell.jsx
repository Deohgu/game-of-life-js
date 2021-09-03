import React from "react";
import { useSelector } from "react-redux";

import { CellStyled } from "./Cell.styled";

const Cell = () => {
  const { divisor } = useSelector((state) => state.settings);

  return <CellStyled width={80} height={80} divisor={divisor}></CellStyled>;
};

export default Cell;
