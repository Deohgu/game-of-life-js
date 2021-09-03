import React from "react";

import { GridStyled } from "./Grid.styled";
import Cell from "./Cell";

const Grid = () => {
  const emptyArr = [];
  for (let i = 0; i < 64; i++) {
    emptyArr.push(i);
  }

  return (
    <GridStyled>
      {emptyArr.map((curr, index) => {
        return <Cell key={`${curr} - ${index}`} />;
      })}
    </GridStyled>
  );
};

export default Grid;
