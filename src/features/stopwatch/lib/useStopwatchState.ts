import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib";
import { statusBarActions } from "@/features/status-bar";
import { useStopwatch } from "./useStopwatch";

export const useStopwatchState = () => {
  const dispatch = useAppDispatch();
  const {
    min,
    sec,
    ms,
    start,
    stop,
    reset,
    addInterval,
    intervals,
    stopwatchStatus,
  } = useStopwatch();

  const handleStart = () => {
    start();
    dispatch(statusBarActions.setProcessing(true));
    dispatch(statusBarActions.setPrimaryStatus("processing"));
  };

  const handleStop = () => {
    stop();
    dispatch(statusBarActions.setPrimaryStatus("suspended"));
  };

  const handleReset = () => {
    reset();
    dispatch(statusBarActions.setProcessing(false));
    dispatch(statusBarActions.setPrimaryStatus("stopwatch"));

  };

  const handleAddInterval = () => {
    addInterval();
  };

  useEffect(() => {
    dispatch(statusBarActions.setPrimaryStatus("stopwatch"));
    dispatch(statusBarActions.setSecondaryStatus("stopwatch"));
  }, []);

  return {
    min,
    sec,
    ms,
    handleStart,
    handleStop,
    handleReset,
    handleAddInterval,
    intervals,
    stopwatchStatus,
  };
};
