import { createSlice } from "@reduxjs/toolkit";

import gridGenerator from "./utils/gridGenerator";

const initialState = {
  gridStyleSize: 80, // vh
  gridWidth: 20,
  gridHeight: 20,
  grid: 0,
  aliveLocations: [],
};

initialState.grid = gridGenerator(
  initialState.gridWidth,
  initialState.gridHeight,
  "empty"
).newGrid;

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateGrid(state, action) {
      state.grid = action.payload;
    },
    updateAliveLocations(state, action) {
      state.aliveLocations = action.payload;
    },
  },
});

export const { updateGrid, updateAliveLocations } = settingsSlice.actions;

export default settingsSlice.reducer;
