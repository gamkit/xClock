import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/shared/lib/redux/types";

const selectTimerState = (state: RootState) => state.timer;

const createTimerSelector = <K extends keyof RootState["timer"]>(key: K) =>
  createSelector([selectTimerState], (timer) => timer[key]);

export const selectTimerSlots = createTimerSelector("slots");
export const selectTimerStatus = createTimerSelector("status");
