import styles from "./Digits.module.scss";

interface IDigitsProps {
  hours: string;
  minutes: string;
}

export const Digits = ({ hours, minutes }: IDigitsProps) => {
  return (
    <div className={styles["digits"]}>
      <p>{hours}</p>
      <span className={styles["delimiter"]}></span>
      <p>{minutes}</p>
    </div>
  );
};
