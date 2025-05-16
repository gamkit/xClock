import { useEffect, useRef } from "react";
import { MediaButton } from "@/shared/ui";
import { TTimerStatus } from "../lib/useTimer";
import styles from "./Controls.module.scss";

interface IControlsProps {
  timerStatus: TTimerStatus;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
}

export const Controls = ({
  timerStatus,
  onPlay,
  onPause,
  onStop,
}: IControlsProps) => {
  const controlPlayRef = useRef<HTMLButtonElement>(null);
  const controlPauseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (timerStatus === "waiting" || timerStatus === "paused") {
      controlPlayRef.current?.focus();
    }
    if (timerStatus === "running") {
      controlPauseRef.current?.focus();
    }
  }, [timerStatus]);

  return (
    <div className={styles["controls-container"]}>
      {timerStatus === "waiting" && (
        <MediaButton action="play" onClick={onPlay} ref={controlPlayRef} />
      )}
      {timerStatus === "running" && (
        <>
          <MediaButton action="pause" onClick={onPause} ref={controlPauseRef} />
          <MediaButton action="stop" onClick={onStop} />
        </>
      )}
      {timerStatus === "paused" && (
        <>
          <MediaButton action="play" onClick={onPlay} ref={controlPlayRef} />
          <MediaButton action="stop" onClick={onStop} />
        </>
      )}
    </div>
  );
};
