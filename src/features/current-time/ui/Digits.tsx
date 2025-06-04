import { motion } from "motion/react";
import styles from "./Digits.module.scss";
import { clockDigitsVariants } from "../lib/constants";

interface IDigitsProps {
  hours: string;
  minutes: string;
}

export const Digits = ({ hours, minutes }: IDigitsProps) => {
  return (
    <motion.div className={styles["digits"]} {...clockDigitsVariants}>
      <motion.div className={styles["digits__digit-item"]}>{hours}</motion.div>
      <div className={styles["digits__delimiter"]}></div>
      <div className={styles["digits__digit-item"]}>{minutes}</div>
    </motion.div>
  );
};
