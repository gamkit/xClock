import { useCurrentTime } from "@/features/current-time/lib/useCurrentTime";
import { CardContainer } from "@/shared/ui";
import styles from "./CurrentTime.module.scss";

export const CurrentTime = () => {
  const { hours, minutes, dayOfWeek, date } = useCurrentTime();

  return (
    <CardContainer>
      <div className={styles["clock-container"]}>
        <div className={styles["digits"]}>
          <p>{hours}</p>
          <span className={styles["delimiter"]}></span>
          <p>{minutes}</p>
        </div>
        <div className={styles["date"]}>
          {dayOfWeek}, <span>{date}</span>
        </div>
      </div>
    </CardContainer>
  );
};
