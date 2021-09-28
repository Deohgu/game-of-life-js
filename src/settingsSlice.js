import { createSlice } from "@reduxjs/toolkit";

import gridGenerator from "./utils/gridGenerator";

const initialState = {
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
    updateGrid(state, action) {
      state.grid = action.payload;
    },
    updateliveNeighbours(state, action) {
      state.liveNeighbours = action.payload;
    },
  },
});

export const { updateGrid, updateliveNeighbours } = settingsSlice.actions;

export default settingsSlice.reducer;
