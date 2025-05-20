import { useEffect, useRef } from "react";
import { MediaButton } from "@/shared/ui";
import { TStopwatchStatus } from "../lib/useStopwatch";
import styles from "./Controls.module.scss";

interface IControlsProps {
  stopwatchStatus: TStopwatchStatus;
  onPlay: () => void;
  onStop: () => void;
  onAddInterval: () => void;
  onReset: () => void;
}

export const Controls = ({
  stopwatchStatus,
  onPlay,
  onStop,
  onAddInterval,
  onReset,
}: IControlsProps) => {
  const controlPlayRef = useRef<HTMLButtonElement>(null);
  const controlIntervalRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (stopwatchStatus === "waiting") {
      controlPlayRef.current?.focus();
    }
    if (stopwatchStatus === "running") {
      controlIntervalRef.current?.focus();
    }
  }, [stopwatchStatus]);

  return (
    <div className={styles["controls-container"]}>
      {stopwatchStatus === "waiting" && (
        <MediaButton action="play" onClick={onPlay} ref={controlPlayRef} />
      )}
      {stopwatchStatus === "running" && (
        <>
          <MediaButton action="interval" onClick={onAddInterval} ref={controlIntervalRef} />
          <MediaButton action="stop" onClick={onStop} />
        </>
      )}
      {stopwatchStatus === "stopped" && (
        <>
          <MediaButton action="reset" onClick={onReset} />
          <MediaButton action="play" onClick={onPlay} />
        </>
      )}
    </div>
  );
};
