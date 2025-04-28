import { ReactNode } from "react";
import styles from "./CurrentTimeLayout.module.scss";

interface ICurrentTimeLayoutProps {
  digits: ReactNode;
  date: ReactNode;
}

export const CurrentTimeLayout = ({
  digits,
  date,
}: ICurrentTimeLayoutProps) => {
  return (
    <>
      <div className={styles["clock-container"]}>
        {digits}
        {date}
      </div>
    </>
  );
};
