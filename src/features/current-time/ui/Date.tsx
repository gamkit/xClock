import { motion } from "motion/react";
import styles from "./Date.module.scss";
import { clockDateVariants } from "../lib/constants";

interface IDateProps {
  dayOfWeek: string;
  date: string;
}

export const Date = ({ date, dayOfWeek }: IDateProps) => {
  return (
    <motion.div className={styles["date"]} {...clockDateVariants}>
      {dayOfWeek}, <span>{date}</span>
    </motion.div>
  );
};
