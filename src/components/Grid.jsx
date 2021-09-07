import React from "react";
import { useSelector } from "react-redux";

import { GridContainer, GridRow } from "./Grid.styled";
import Cell from "./Cell";

const Grid = ({ grid }) => {
  const { gridSize } = useSelector((state) => state.settings);

  return (
    <GridContainer gridSize={gridSize}>
      {grid.map((xCurr, xIndex) => (
        <GridRow key={`Row - ${xIndex}`}>
          {xCurr.map((yCurr, yIndex) => (
            <Cell
              // onClick={}
              isAlive={yCurr.isAlive}
              key={`Cell - ${xIndex} ${yIndex}`}
            />
          ))}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default Grid;
