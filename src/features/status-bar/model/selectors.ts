import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/shared/lib/redux/types";

const selectStatusBarState = (state: RootState) => state.statusBar;

const createStatusBarSelector = <K extends keyof RootState['statusBar']>(key: K) =>
  createSelector([selectStatusBarState], (statusBar) => statusBar[key]);

export const selectPrimaryStatus = createStatusBarSelector('primaryStatus');
export const selectSecondaryStatus = createStatusBarSelector('secondaryStatus');
export const selectIsProcessing = createStatusBarSelector('isProcessing');