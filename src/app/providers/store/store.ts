import { configureStore } from "@reduxjs/toolkit";
import { timerReducer } from "@/features/timer/model/slice";
import { statusBarReducer } from "@/features/status-bar/model/slice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    statusBar: statusBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
