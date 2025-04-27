import styles from "./Date.module.scss";

interface IDateProps {
  dayOfWeek: string;
  date: string;
}

export const Date = ({ date, dayOfWeek }: IDateProps) => {
  return (
    <div className={styles["date"]}>
      {dayOfWeek}, <span>{date}</span>
    </div>
  );
};
