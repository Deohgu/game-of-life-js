import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import gridGenerator from "./utils/gridGenerator";

type settingsSliceState = {
  gridStyleSize: number;
  gridWidth: number;
  gridHeight: number;
  grid: { isAlive: boolean }[][];
  liveNeighbours: { [key: number]: { [key: number]: number } };
};

const initialState: settingsSliceState = {
  gridStyleSize: 80, // vh
  gridWidth: 20,
  gridHeight: 20,
  grid: [],
  liveNeighbours: {},
};

const { newGrid, liveNeighbours } = gridGenerator(
  initialState.gridWidth,
  initialState.gridHeight,
  "empty"
);

initialState.grid = newGrid;
initialState.liveNeighbours = liveNeighbours;

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateGrid(state, action: PayloadAction<{ isAlive: boolean }[][]>) {
      state.grid = action.payload;
    },
    updateliveNeighbours(
      state,
      action: PayloadAction<{ [key: number]: { [key: number]: number } }>
    ) {
      state.liveNeighbours = action.payload;
    },
  },
});

export const { updateGrid, updateliveNeighbours } = settingsSlice.actions;

export default settingsSlice.reducer;
