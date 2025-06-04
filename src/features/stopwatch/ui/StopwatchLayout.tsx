import { ReactNode } from "react";
import { motion } from "motion/react";
import styles from "./StopwatchLayout.module.scss";
import { timeDigitsVariants } from "../lib/constants";

interface IStopwatchLayoutProps {
  digits: ReactNode;
  controls: ReactNode;
  intervals: ReactNode;
  isAnimate: boolean;
}

export const StopwatchLayout = ({
  digits,
  controls,
  intervals,
  isAnimate,
}: IStopwatchLayoutProps) => {
  return (
    <div className={styles["stopwatch__container"]}>
      <motion.div
        className={styles["stopwatch__digits"]}
        animate={isAnimate ? "open" : "closed"}
        {...timeDigitsVariants}
      >
        {digits}
      </motion.div>
      <motion.div
        className={styles["stopwatch__controls"]}
        animate={isAnimate ? "open" : "closed"}
        {...timeDigitsVariants}
      >
        {controls}
      </motion.div>
      <div className={styles["stopwatch__intervals"]}>{intervals}</div>
    </div>
  );
};
