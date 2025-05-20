import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib";
import { statusBarActions } from "@/features/status-bar";
import { useStopwatch } from "./useStopwatch";
import { stopwatchActions } from "../model/slice";

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
    dispatch(stopwatchActions.setStopwatchStatus("running"));
  };

  const handleStop = () => {
    stop();
    dispatch(statusBarActions.setPrimaryStatus("suspended"));
    dispatch(stopwatchActions.setStopwatchStatus("stopped"));
  };

  const handleReset = () => {
    reset();
    dispatch(statusBarActions.setProcessing(false));
    dispatch(statusBarActions.setPrimaryStatus("stopwatch"));
    dispatch(stopwatchActions.setStopwatchStatus("waiting"));
  };

  const handleAddInterval = () => {
    addInterval();
  };

  useEffect(() => {
    dispatch(statusBarActions.setPrimaryStatus("stopwatch"));
    dispatch(statusBarActions.setSecondaryStatus("stopwatch"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
