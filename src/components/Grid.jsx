import React from "react";
import { useSelector } from "react-redux";

import { GridContainer, GridRow } from "./Grid.styled";
import Cell from "./Cell";

import gridChecker from "../utils/gridChecker";

const Grid = () => {
  const { gridSize, gridWidth, gridHeight } = useSelector(
    (state) => state.settings
  );

  //  Replace this with a better method to create the grid
  let gridArr = [];
  for (let i = 0; i < gridWidth; i++) {
    gridArr.push([]);
    for (let j = 0; j < gridHeight; j++) {
      gridArr[i].push({ isAlive: Math.random() < 0.5 ? false : true });
    }
  }

  gridChecker(gridArr, gridWidth, gridHeight);

  console.log("gridArr:", gridArr);

  return (
    <GridContainer gridSize={gridSize}>
      {gridArr.map((xCurr, xIndex) => (
        <GridRow key={`Row - ${xIndex}`}>
          {xCurr.map((yCurr, yIndex) => (
            <Cell isAlive={yCurr.isAlive} key={`Cell - ${xIndex} ${yIndex}`} />
          ))}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default Grid;
