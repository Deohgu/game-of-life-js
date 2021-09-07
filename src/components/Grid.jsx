import React from "react";
import { useSelector } from "react-redux";

import { GridContainer, GridRow } from "./Grid.styled";
import Cell from "./Cell";

const Grid = ({ gridArr }) => {
  const { gridSize, gridWidth, gridHeight } = useSelector(
    (state) => state.settings
  );

  // console.log("gridArr:", gridArr);

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
