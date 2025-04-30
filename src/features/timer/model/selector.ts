import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/shared/lib/redux/types";

const selectTimerState = (state: RootState) => state.timer;

export const selectTimerSlots = createSelector(
  [selectTimerState],
  (timer) => timer.slots
);

export const selectTimerStatus = createSelector(
  [selectTimerState],
  (timer) => timer.status
);
