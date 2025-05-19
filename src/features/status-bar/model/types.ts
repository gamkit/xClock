export type TScreenName =
  | "timer"
  | "stopwatch"
  | "clock"
  | "settings"
  | "menu"
  | "default";
export type TActiveFeatureStatus = "processing" | "suspended" | "default";

export type TStatusBarState = {
  primaryStatus: TScreenName | TActiveFeatureStatus;
  secondaryStatus: TScreenName;
  isProcessing: boolean;
};
