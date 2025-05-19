import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TActiveFeatureStatus, TScreenName, TStatusBarState } from "./types";

const initialState: TStatusBarState = {
  primaryStatus: "default",
  secondaryStatus: "default",
  isProcessing: false,
};

const statusBarSlice = createSlice({
  name: "status-bar",
  initialState,
  reducers: {
    setPrimaryStatus: (
      state,
      action: PayloadAction<TScreenName | TActiveFeatureStatus>
    ) => {
      state.primaryStatus = action.payload;
    },
    setSecondaryStatus: (state, action: PayloadAction<TScreenName>) => {
      state.secondaryStatus = action.payload;
    },
    setProcessing: (state, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
  },
});

export const statusBarActions = statusBarSlice.actions;
export const statusBarReducer = statusBarSlice.reducer;
