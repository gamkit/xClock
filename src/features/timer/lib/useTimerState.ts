import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
  getTimerBySlotValue,
} from "@/shared/lib";
import { statusBarActions } from "@/features/status-bar";
import { selectTimerSlots } from "../model/selector";
import { timerActions } from "../model/slice";
import { TTimerSlotItem } from "../model/types";
import { useTimer } from "../lib/useTimer";

type TModalSlotAction = "create" | "delete" | "edit" | "default";

const modalLabelMap: Record<TModalSlotAction, string> = {
  create: "Добавить новый таймер",
  delete: "Удалить этот таймер?",
  edit: "Изменить таймер",
  default: "",
};

type TModalState = {
  isOpen: boolean;
  title: string;
  action: TModalSlotAction;
};

type TSlotState = {
  currentTimer: number;
  slotData: TTimerSlotItem | undefined;
  selectedSlotId: number | string;
};

export const useTimerState = () => {
  const timerSlotsData = useAppSelector(selectTimerSlots);
  const dispatch = useAppDispatch();

  const [slotState, setSlotState] = useState<TSlotState>({
    currentTimer: getTimerBySlotValue(timerSlotsData[0]?.value),
    slotData: undefined,
    selectedSlotId: timerSlotsData[0]?.id,
  });

  const [modalState, setModalState] = useState<TModalState>({
    isOpen: false,
    title: "",
    action: "default",
  });

  const { min, ms, sec, timerStatus, pause, start, stop } = useTimer(
    slotState.currentTimer
  );

  const handleSelectSlotHandler = (id: string | number, value: string) => {
    setSlotState((prevState) => ({
      ...prevState,
      selectedSlotId: id,
      currentTimer: getTimerBySlotValue(value),
    }));
  };

  const handleCloseModal = () => {
    setModalState((prevState) => ({
      ...prevState,
      isOpen: false,
      title: "",
      action: "default",
    }));
  };

  const handleOpenModalByAction = (
    action: TModalSlotAction,
    slotId?: string | number
  ) => {
    const _slot = timerSlotsData.find((s) => s.id === slotId);
    setSlotState((prevState) => ({
      ...prevState,
      slotData: _slot,
    }));

    setModalState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
      title: modalLabelMap[action],
      action,
    }));
  };

  const handleDeleteConfirm = (slotId: string | number) => {
    const _slot = timerSlotsData.filter((s) => s.id !== slotId)[0];
    dispatch(timerActions.removeTimeSlot({ id: slotId }));
    if (_slot) {
      handleSelectSlotHandler(_slot.id, _slot.value);
    }
    handleCloseModal();
  };

  const handleEditConfirm = (
    id: string | number,
    title: string,
    value: string
  ) => {
    dispatch(
      timerActions.editTimeSlot({
        id,
        title,
        value,
      })
    );
    handleCloseModal();
  };

  const handleCreateConfirm = (title: string, value: string) => {
    dispatch(
      timerActions.addTimeSlot({
        title,
        value,
      })
    );
    handleCloseModal();
  };

  const handleStart = () => {
    start();
    dispatch(timerActions.setTimerStatus("running"));
    dispatch(statusBarActions.setProcessing(true));
    dispatch(statusBarActions.setPrimaryStatus("processing"));
  };

  const handlePause = () => {
    pause();
    dispatch(timerActions.setTimerStatus("paused"));
    dispatch(statusBarActions.setPrimaryStatus("suspended"));
  };

  const handleStop = () => {
    stop();
    dispatch(timerActions.setTimerStatus("waiting"));
    dispatch(statusBarActions.setPrimaryStatus("timer"));
    dispatch(statusBarActions.setProcessing(false));
  };

  useEffect(() => {
    dispatch(statusBarActions.setPrimaryStatus("timer"));
    dispatch(statusBarActions.setSecondaryStatus("timer"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timerStatus === "waiting") {
      dispatch(timerActions.setTimerStatus("waiting"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerStatus]);

  return {
    min,
    ms,
    sec,
    timerStatus,
    handleStart,
    handlePause,
    handleStop,

    timerSlotsData,
    modalState,
    slotState,

    handleOpenModalByAction,
    handleCloseModal,
    handleSelectSlotHandler,

    handleCreateConfirm,
    handleEditConfirm,
    handleDeleteConfirm,
  };
};
