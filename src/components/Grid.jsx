import React from "react";
import { useSelector } from "react-redux";

import { GridContainer, GridRow } from "./Grid.styled";
import Cell from "./Cell";

const Grid = () => {
  const { gridSize, gridWidth, gridHeight } = useSelector(
    (state) => state.settings
  );

  //  Replace this with a better method to create the grid
  let gridArr = [];
  for (let i = 0; i < gridWidth; i++) {
    gridArr.push([]);
    for (let j = 0; j < gridHeight; j++) {
      gridArr[i].push(`X: ${j} Y: ${i}`);
    }
  }

  return (
    <GridContainer gridSize={gridSize}>
      {gridArr.map((xCurr) => (
        <GridRow key={`${xCurr}`}>
          {xCurr.map((yCurr) => (
            <Cell key={`${yCurr}`} />
          ))}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default Grid;
