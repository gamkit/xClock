import { Digit } from "@/shared/ui";
import styles from "./Digits.module.scss";

interface DigitsProps {
  min: string;
  sec: string;
  ms: string;
}

export const Digits = ({ min, sec, ms }: DigitsProps) => {
  return (
    <div className={styles["digits"]}>
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
