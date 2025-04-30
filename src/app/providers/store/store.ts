import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer } from "@/features/navigation/model/slice";
import { timerReducer } from "@/features/timer/model/slice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
