import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TStopwatchStatus } from "../lib/useStopwatch";
import { TStopwatchState } from "./types";

const initialState: TStopwatchState = {
  status: "waiting",
};

const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    // update status
    setStopwatchStatus: (state, action: PayloadAction<TStopwatchStatus>) => {
      state.status = action.payload;
    },
  },
});

export const stopwatchActions = stopwatchSlice.actions;
export const stopwatchReducer = stopwatchSlice.reducer;
