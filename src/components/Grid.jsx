import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateGrid } from "../settingsSlice.js";

import { GridContainer, GridRow } from "./Grid.styled";
import Cell from "./Cell";

const Grid = ({ grid }) => {
  const { gridStyleSize } = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  const cellClickHandler = (x, y) => {
    const gridClone = JSON.parse(JSON.stringify(grid));
    gridClone[y][x].isAlive = !gridClone[y][x].isAlive;
    dispatch(updateGrid(gridClone));
  };

  return (
    <GridContainer gridStyleSize={gridStyleSize}>
      {grid.map((yCurr, yIndex) => (
        <GridRow key={`Row - ${yIndex}`}>
          {yCurr.map((xCurr, xIndex) => (
            <Cell
              cellClickHandler={() => cellClickHandler(xIndex, yIndex)}
              isAlive={xCurr.isAlive}
              key={`Cell - ${xIndex} ${yIndex}`}
            />
          ))}
        </GridRow>
      ))}
    </GridContainer>
  );
};

export default Grid;
