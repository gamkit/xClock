import { useState, useRef, useEffect } from "react";
import { padToTwoDigits } from "@/shared/lib";
import { getDigitValuesByTime } from "./getDigitValuesByTime";

export type TStopwatchStatus = "waiting" | "running" | "stopped";

export type TIntervalValue = {
  id: string;
  lapTime: string;
  totalTime: string;
  time: number;
};

export const useStopwatch = () => {
  const [stopwatchStatus, setStopwatchStatus] =
    useState<TStopwatchStatus>("waiting");
  const [time, setTime] = useState(0);
  const [intervals, setIntervals] = useState<TIntervalValue[]>([]);
  const [counter, setCounter] = useState(1);

  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const savedTimeRef = useRef(0);
  const statusRef = useRef(stopwatchStatus);

  const totalTimeValues = getDigitValuesByTime(time);

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
    setCounter(0);
    savedTimeRef.current = 0;
    startTimeRef.current = null;
    setIntervals([]);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const addInterval = () => {
    setCounter((prev) => prev + 1);
    setIntervals((prev) => {
      let lapTimeValues = { ...totalTimeValues };

      if (prev.length) {
        lapTimeValues = getDigitValuesByTime(time - prev[prev.length - 1].time);
      }
      return [
        ...prev,
        {
          id: padToTwoDigits(counter),
          lapTime: `${lapTimeValues.min}:${lapTimeValues.sec}:${lapTimeValues.ms}`,
          totalTime: `${totalTimeValues.min}:${totalTimeValues.sec}:${totalTimeValues.ms}`,
          time,
        },
      ];
    });
  };

  return {
    min: totalTimeValues.min,
    sec: totalTimeValues.sec,
    ms: totalTimeValues.ms,
    start,
    stop,
    reset,
    addInterval,
    stopwatchStatus,
    intervals,
  };
};
