import classNames from "classnames";
import { Digit } from "@/shared/ui";
import styles from "./TimeDisplay.module.scss";

interface ITimeDisplayProps {
  min: string;
  sec: string;
  ms: string;
  className?: string;
}

export const TimeDisplay = ({ min, sec, ms, className }: ITimeDisplayProps) => {
  return (
    <div className={classNames(className, styles["digits"])}>
      <Digit>{min}</Digit>
      <div className={styles["digits__delimiter"]}></div>
      <Digit>{sec}</Digit>
      <div className={styles["digits__delimiter"]}></div>
      <Digit>{ms}</Digit>
    </div>
  );
};
