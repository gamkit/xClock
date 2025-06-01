import { useEffect, useState } from "react";
import { useAppDispatch } from "@/shared/lib";
import { statusBarActions } from "@/features/status-bar";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import {
  GET_TIME_FORMAT,
  TIME_FORMAT_12H,
  TIME_FORMAT_24H,
} from "@/shared/const/storage";
import toast from "react-hot-toast";

export type TTimeFormat = "12H" | "24H";

export const useSettingsState = () => {
  const dispatch = useAppDispatch();
  const { theme, toggleTheme } = useTheme();
  const [timeFormat, setTimeFormat] = useState<TTimeFormat>(
    localStorage.getItem(GET_TIME_FORMAT) as TTimeFormat
  );

  useEffect(() => {
    dispatch(statusBarActions.setPrimaryStatus("settings"));
    dispatch(statusBarActions.setSecondaryStatus("settings"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeTheme = () => {
    toggleTheme();
    toast.success("Тема успешно изменена");
  };

  const handleChangeTimeFormat = () => {
    const currenTimeFormat = localStorage.getItem(GET_TIME_FORMAT);
    if (currenTimeFormat === TIME_FORMAT_24H) {
      localStorage.setItem(GET_TIME_FORMAT, TIME_FORMAT_12H);
      setTimeFormat(TIME_FORMAT_12H);
      toast.success(`Формат отображения изменен на 12-ти часовой`);
    } else {
      localStorage.setItem(GET_TIME_FORMAT, TIME_FORMAT_24H);
      setTimeFormat(TIME_FORMAT_24H);
      toast.success(`Формат отображения изменен на 24-х часовой`);
    }
  };

  return {
    theme,
    timeFormat,
    handleChangeTheme,
    handleChangeTimeFormat,
  };
};
