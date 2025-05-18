import { ReactNode } from "react";
import styles from "./StatusBar.module.scss";

interface IStatusBarLayoutProps {
  primaryTextBar: ReactNode;
  secondaryTextBar: ReactNode;
}

export const StatusBarLayout = ({
  primaryTextBar,
  secondaryTextBar,
}: IStatusBarLayoutProps) => {
  return (
    <div className={styles["status-bar"]}>
      {secondaryTextBar}
      {primaryTextBar}
    </div>
  );
};
