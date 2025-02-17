import { useEffect, useState } from "react";

export const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
console.log('1')
    return () => clearInterval(interval);
  }, []);

  return [time.getHours(), time.getMinutes()];
};
