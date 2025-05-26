import { configureStore } from "@reduxjs/toolkit";
import { timerReducer } from "@/features/timer";
import { statusBarReducer } from "@/features/status-bar";
import { stopwatchReducer } from "@/features/stopwatch";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    statusBar: statusBarReducer,
    stopwatch: stopwatchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
