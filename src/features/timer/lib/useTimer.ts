import { padToTwoDigits } from "@/shared/lib";
import { useEffect, useRef, useState } from "react";

export type TTimerStatus = "waiting" | "running" | "paused";

export const useTimer = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timerStatus, setTimerStatus] = useState<TTimerStatus>("waiting");
  const lastUpdateTime = useRef<number>(0);
  const animationFrame = useRef<number>(0);

  const min = padToTwoDigits(Math.floor(timeLeft / 60000));
  const sec = padToTwoDigits(Math.floor((timeLeft % 60000) / 1000));
  const ms = padToTwoDigits(Math.floor((timeLeft % 1000) / 10));

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (timerStatus !== "running") return;

    const updateTimer = (timestamp: number) => {
      if (!lastUpdateTime.current) {
        lastUpdateTime.current = timestamp;
      }

      const delta = timestamp - lastUpdateTime.current;
      lastUpdateTime.current = timestamp;

      setTimeLeft((prev) => {
        const newTime = prev - delta;
        if (newTime <= 0) {
          setTimerStatus("waiting");
          return 0;
        }
        return newTime;
      });

      animationFrame.current = requestAnimationFrame(updateTimer);
    };
    animationFrame.current = requestAnimationFrame(updateTimer);

    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  }, [timerStatus]);

  useEffect(() => {
    if (timeLeft <= 0 && timerStatus === "waiting") {
      alert("Время вышло");
      stop();
    }
  }, [timeLeft, timerStatus]);

  const start = () => {
    if (timerStatus === "running") return;
    setTimerStatus("running");
    lastUpdateTime.current = 0;
  };

  const pause = () => {
    if (timerStatus !== "running") return;
    setTimerStatus("paused");
    cancelAnimationFrame(animationFrame.current);
  };

  const stop = () => {
    setTimerStatus("waiting");
    setTimeLeft(initialTime);
    cancelAnimationFrame(animationFrame.current);
    lastUpdateTime.current = 0;
  };

  return { min, sec, ms, timerStatus, start, pause, stop };
};
