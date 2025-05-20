import { padToTwoDigits } from "@/shared/lib";
import { useState, useRef, useEffect } from "react";

export type TStopwatchStatus = "waiting" | "running" | "stopped";
export type TIntervalValue = {
  id: string;
  intervalTime: string;
  totalTime: string;
};

export const useStopwatch = () => {
  const [stopwatchStatus, setStopwatchStatus] =
    useState<TStopwatchStatus>("waiting");
  const [time, setTime] = useState(0);
  const [counter, setCounter] = useState(1);
  const [intervals, setIntervals] = useState<TIntervalValue[]>([]);

  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const savedTimeRef = useRef(0);
  const statusRef = useRef(stopwatchStatus);

  const ms = padToTwoDigits(Math.floor((time % 1000) / 10));
  const sec = padToTwoDigits(Math.floor(time / 1000) % 60);
  const min = padToTwoDigits(Math.floor(time / (1000 * 60)));

  useEffect(() => {
    statusRef.current = stopwatchStatus;
  }, [stopwatchStatus]);

  const updateTime = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    if (statusRef.current === "running") {
      const elapsed = timestamp - startTimeRef.current;
      const totalTime = savedTimeRef.current + elapsed;
      setTime(totalTime);
      animationRef.current = requestAnimationFrame(updateTime);
    }
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const start = () => {
    if (stopwatchStatus === "running") return;

    setStopwatchStatus("running");
    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(updateTime);
  };

  const stop = () => {
    setStopwatchStatus("stopped");
    savedTimeRef.current = time;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const reset = () => {
    setStopwatchStatus("waiting");
    setTime(0);
    savedTimeRef.current = 0;
    startTimeRef.current = null;
    setIntervals([]);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const addInterval = () => {
    setCounter(prev => prev + 1)
    setIntervals((prev) => [
      ...prev,
      {
        id: padToTwoDigits(counter),
        intervalTime: `${min}:${sec}:${ms}`,
        totalTime: `${min}:${sec}:${ms}`,
      },
    ]);
  };

  return {
    min,
    sec,
    ms,
    start,
    stop,
    reset,
    addInterval,
    stopwatchStatus,
    intervals,
  };
};
