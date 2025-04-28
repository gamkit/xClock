import { createSlice } from "@reduxjs/toolkit";
import { TNavigationState } from "./types";

const initialState: TNavigationState = {
  currentScreen: "clock",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.currentScreen = action.payload;
    },
  },
});

export const navigationActions = navigationSlice.actions;
export const navigationReducer = navigationSlice.reducer;
