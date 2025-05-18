import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib";
import { statusBarActions } from "@/features/status-bar";

export const useStopwatchState = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(statusBarActions.setPrimaryStatus("stopwatch"));
    dispatch(statusBarActions.setSecondaryStatus("stopwatch"));
  }, []);
};
