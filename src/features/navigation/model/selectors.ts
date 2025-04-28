import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/shared/lib/redux/types";

const selectNavigationState = (state: RootState) => state.navigation;

export const selectCurrentScreenLabel = createSelector(
  [selectNavigationState],
  (navigation) => navigation.currentScreen
);
