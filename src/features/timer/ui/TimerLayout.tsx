import { ReactNode } from "react";
import styles from "./TimerLayout.module.scss";

interface ITimerLayoutProps {
  digits: ReactNode;
  controls: ReactNode;
  slots: ReactNode;
}

export const TimerLayout = ({
  digits,
  controls,
  slots,
}: ITimerLayoutProps) => {
  return (
    <div className={styles['timer-container']}>
      <div className={styles["digits"]}>{digits}</div>
      <div className={styles["controls"]}>{controls}</div>
      <div className={styles["slots"]}>{slots}</div>
    </div>
  );
};
