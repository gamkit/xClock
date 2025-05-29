import styles from "./Digits.module.scss";

interface IDigitsProps {
  hours: string;
  minutes: string;
}

export const Digits = ({ hours, minutes }: IDigitsProps) => {
  return (
    <div className={styles["digits"]}>
      <div className={styles["digits__digit-item"]}>{hours}</div>
      <div className={styles['digits__delimiter']}></div>
      <div className={styles["digits__digit-item"]}>{minutes}</div>
    </div>
  );
};
