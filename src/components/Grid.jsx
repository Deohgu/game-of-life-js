import React from "react";
import { useSelector } from "react-redux";

import { GridStyled } from "./Grid.styled";
import Cell from "./Cell";

const Grid = () => {
  const { gridSize } = useSelector((state) => state.settings);

  const emptyArr = [];
  for (let i = 0; i < 64; i++) {
    emptyArr.push(i);
  }

  return (
    <GridStyled gridSize={gridSize}>
      {emptyArr.map((curr, index) => {
        return <Cell key={`${curr} - ${index}`} />;
      })}
    </GridStyled>
  );
};

export default Grid;
