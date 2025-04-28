export type TScreenName = "timer" | "stopwatch" | "clock" | "settings" | "menu";

export type TNavigationState = {
  currentScreen: TScreenName;
};