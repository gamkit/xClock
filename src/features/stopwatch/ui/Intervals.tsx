import { ReactNode } from "react";
import styles from "./Intervals.module.scss";
import { TIntervalValue } from "../lib/useStopwatch";

interface IIntervalsProps {
  children: ReactNode | ReactNode[];
}

export const Intervals = ({ children }: IIntervalsProps) => {
  return (
    <div className={styles["intervals__container"]}>
      <div className={styles["intervals__desc"]}>
        <p>Время круга</p>
        <p>Общее время</p>
      </div>
      <ul className={styles["intervals__items"]}>{children}</ul>
    </div>
  );
};

export const IntervalItem = ({
  id,
  lapTime,
  totalTime,
}: TIntervalValue) => {
  return (
    <li className={styles["interval-item"]}>
      <p>{id}</p>
      <p>{lapTime}</p>
      <p>{totalTime}</p>
    </li>
  );
};
