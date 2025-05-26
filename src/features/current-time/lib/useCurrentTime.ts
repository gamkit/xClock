import { useEffect, useState } from "react";
import { useAppDispatch } from "@/shared/lib";
import { statusBarActions } from "@/features/status-bar";
import { DAY_NAMES, MONTH_NAMES } from "@/shared/config";

export const useCurrentTime = () => {
  const [time, setTime] = useState(() => new Date());
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const delay = 1000 - now.getMilliseconds();

      timer = setTimeout(() => {
        setTime(now);
        timer = setTimeout(updateTime, 1000);
      }, delay);
    };

    let timer: NodeJS.Timeout = setTimeout(updateTime, 1000);

    const visibilityChangeHandler = () => {
      if (!document.hidden) {
        setTime(new Date());
      }
    };

    document.addEventListener("visibilitychange", visibilityChangeHandler);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", visibilityChangeHandler);
    };
  }, []);

  useEffect(() => {
    dispatch(statusBarActions.setPrimaryStatus("clock"));
    dispatch(statusBarActions.setSecondaryStatus("clock"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    hours: time.getHours().toString(),
    minutes: time.getMinutes().toString().padStart(2, "0"),
    dayOfWeek: DAY_NAMES[time.getDay()],
    date: `${time.getDate()} ${MONTH_NAMES[time.getMonth()]}`,
  };
};
