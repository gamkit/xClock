import { TTimerStatus } from "../lib/useTimer";

export type TTimerSlotItem = {
  id: string | number;
  title: string;
  value: string;
  isActive?: boolean;
};

export type TTimerState = {
  slots: TTimerSlotItem[];
  status: TTimerStatus;
};
