import { createSlice } from "@reduxjs/toolkit";

import gridGenerator from "./utils/gridGenerator";

const initialState = {
  gridSize: 80, // vh
  gridWidth: 8,
  gridHeight: 8,
  get grid() {
    return gridGenerator(this.gridWidth, this.gridHeight);
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateGrid(state, action) {
      state.grid = action.payload;
    },
  },
});

export const { updateGrid } = settingsSlice.actions;

export default settingsSlice.reducer;
