import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/shared/lib/redux/types";

const selectStopwatchState = (state: RootState) => state.stopwatch;

const createStopwatchSelector = <K extends keyof RootState["stopwatch"]>(key: K) =>
  createSelector([selectStopwatchState], (stopwatch) => stopwatch[key]);

export const selectStopwatchStatus = createStopwatchSelector("status");
