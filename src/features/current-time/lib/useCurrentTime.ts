import { useEffect, useState } from "react";
import { padToTwoDigits, useAppDispatch } from "@/shared/lib";
import { statusBarActions } from "@/features/status-bar";
import { DAY_NAMES, MONTH_NAMES } from "@/shared/config";
import { GET_TIME_FORMAT, TIME_FORMAT_12H } from "@/shared/const/storage";

export const useCurrentTime = () => {
  const [time, setTime] = useState(() => new Date());
  const dispatch = useAppDispatch();
  const currentTimeFormat = localStorage.getItem(GET_TIME_FORMAT);

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
    hours: padToTwoDigits(
      currentTimeFormat === TIME_FORMAT_12H
        ? time.getHours() % 12
        : time.getHours()
    ),
    minutes: padToTwoDigits(time.getMinutes()),
    dayOfWeek: DAY_NAMES[time.getDay()],
    date: `${time.getDate()} ${MONTH_NAMES[time.getMonth()]}`,
  };
};
