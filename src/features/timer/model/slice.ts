import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTimerState, TTimerSlotItem } from "./types";
import { nanoid } from "nanoid";
import { TTimerStatus } from "../lib/useTimer";

const initialState: TTimerState = {
  slots: [
    {
      id: 1,
      title: "Перерыв",
      value: "30:00:00",
      isActive: true,
    },
    {
      id: 2,
      title: "Планка",
      value: "00:01:00",
      isActive: false,
    },
    {
      id: 3,
      title: "Таймер 2",
      value: "00:10:00",
      isActive: false,
    },
  ],
  status: "waiting",
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    // create slot
    addTimeSlot: (
      state,
      action: PayloadAction<Pick<TTimerSlotItem, "title" | "value">>
    ) => {
      const id = nanoid();
      state.slots.push({
        id,
        title: action.payload.title,
        value: action.payload.value,
        isActive: false,
      });
    },

    // delete slot
    removeTimeSlot: (
      state,
      action: PayloadAction<Pick<TTimerSlotItem, "id">>
    ) => {
      state.slots = state.slots.filter((slot) => slot.id !== action.payload.id);
    },

    // update slot
    editTimeSlot: (state, action: PayloadAction<TTimerSlotItem>) => {
      const slot = state.slots.find((slot) => slot.id === action.payload.id);
      if (slot) {
        slot.title = action.payload.title;
        slot.value = action.payload.value;
      }
    },

    // update status
    setTimerStatus: (state, action: PayloadAction<TTimerStatus>) => {
      state.status = action.payload;
    },
  },
});

export const timerActions = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
