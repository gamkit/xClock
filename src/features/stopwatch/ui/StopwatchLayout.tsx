import { ReactNode } from "react";
import styles from "./StopwatchLayout.module.scss";

interface IStopwatchLayoutProps {
  digits: ReactNode;
  controls: ReactNode;
  intervals: ReactNode;
}

export const StopwatchLayout = ({
  digits,
  controls,
  intervals,
}: IStopwatchLayoutProps) => {
  return (
    <div className={styles["stopwatch__container"]}>
      <div className={styles["stopwatch__digits"]}>{digits}</div>
      <div className={styles["stopwatch__controls"]}>{controls}</div>
      <div className={styles["stopwatch__intervals"]}>{intervals}</div>
    </div>
  );
};
