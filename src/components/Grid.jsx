import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateGrid, updateliveNeighbours } from "../settingsSlice.js";

import { GridContainer, GridRow } from "./Grid.styled";
import Cell from "./Cell";

import updateNeighbours from "../utils/updateNeighbours.ts";

const Grid = () => {
  const { gridWidth, gridHeight, gridStyleSize, grid, liveNeighbours } =
    useSelector((state) => state.settings);

  const dispatch = useDispatch();

  const cellClickHandler = (y, x) => {
    const gridClone = JSON.parse(JSON.stringify(grid));
    gridClone[y][x].isAlive = !gridClone[y][x].isAlive;

    dispatch(
      updateliveNeighbours(
        updateNeighbours(
          gridClone,
          liveNeighbours,
          gridWidth,
          gridHeight,
          y,
          x,
          true
        )
      )
    );
    dispatch(updateGrid(gridClone));
  };

  return (
    <GridContainer gridStyleSize={gridStyleSize}>
      {grid.map((yCurr, yIndex) => (
        <GridRow key={`Row - ${yIndex}`}>
          {yCurr.map((xCurr, xIndex) => (
            <Cell
              cellClickHandler={() => cellClickHandler(yIndex, xIndex)}
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
