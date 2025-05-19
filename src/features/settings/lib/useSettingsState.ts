import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib";
import { statusBarActions } from "@/features/status-bar";

export const useSettingsState = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(statusBarActions.setPrimaryStatus("settings"));
    dispatch(statusBarActions.setSecondaryStatus("settings"));
  }, []);
};
