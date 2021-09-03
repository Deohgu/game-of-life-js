import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gridSize: 80,
  gridWidth: 8,
  gridHeight: 8,
  get divisor() {
    return Math.floor((this.gridWidth + this.gridHeight) / 2);
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  // reducers: {},
});

// export const {} = settingsSlice.actions;

export default settingsSlice.reducer;
