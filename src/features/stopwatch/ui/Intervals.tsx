import { ReactNode } from "react";
import styles from "./Intervals.module.scss";

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

type TIntervalItem = {
  id: string | number;
  intervalTime: string;
  totalTime: string;
};

export const IntervalItem = ({
  id,
  intervalTime,
  totalTime,
}: TIntervalItem) => {
  return (
    <li className={styles["interval-item"]}>
      <p>{id}</p>
      <p>{intervalTime}</p>
      <p>{totalTime}</p>
    </li>
  );
};
