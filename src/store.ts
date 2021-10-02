import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectSettings = (state: RootState) => state.settings;

export default store;
