import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gridSize: 80,
  divisor: 8,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  // reducers: {},
});

// export const {} = settingsSlice.actions;

export default settingsSlice.reducer;
