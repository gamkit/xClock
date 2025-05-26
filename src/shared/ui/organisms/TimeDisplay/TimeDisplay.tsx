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
      <Digit size="sm" tAlign="right">
        {min}
      </Digit>
      <Digit size="sm" tAlign="center">
        {sec}
      </Digit>
      <Digit size="sm" tAlign="left">
        {ms}
      </Digit>
      <div className={styles["digits-delimiters"]}>
        <span className={styles["delimiter"]}></span>
        <span className={styles["delimiter"]}></span>
      </div>
    </div>
  );
};
