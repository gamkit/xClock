import { ReactNode } from "react";
import { motion } from "motion/react";
import { Toaster } from "@/shared/ui";
import { timeDigitsVariants } from "../lib/constants";
import styles from "./TimerLayout.module.scss";

interface ITimerLayoutProps {
  digits: ReactNode;
  controls: ReactNode;
  slots: ReactNode;
  isAnimate: boolean;
}

export const TimerLayout = ({
  digits,
  controls,
  slots,
  isAnimate,
}: ITimerLayoutProps) => {
  return (
    <div className={styles["timer-container"]}>
      <motion.div
        className={styles["timer__digits"]}
        animate={isAnimate ? "open" : "closed"}
        {...timeDigitsVariants}
      >
        {digits}
      </motion.div>
      <motion.div
        className={styles["timer__controls"]}
        animate={isAnimate ? "open" : "closed"}
        {...timeDigitsVariants}
      >
        {controls}
      </motion.div>
      <div className={styles["timer__slots"]}>{slots}</div>
      <Toaster position="top-right" />
    </div>
  );
};
