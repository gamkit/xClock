import { useEffect, useState } from "react";
import { DAY_NAMES, MONTH_NAMES } from "@/shared/config";

export const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    hours: time.getHours(),
    minutes: time.getMinutes().toString().padStart(2, "0"),
    dayOfWeek: DAY_NAMES[time.getDay()],
    date: `${time.getDate()} ${MONTH_NAMES[time.getMonth()]}`,
  };
};
