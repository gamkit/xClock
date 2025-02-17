import { StatusHeading } from "@/shared/ui";
import styles from "./StatusBar.module.scss";

export const StatusBar = () => {
  return (
    <div className={styles["status-bar"]}>
      <StatusHeading size="sm">Часы</StatusHeading>
      <StatusHeading>Часы</StatusHeading>
    </div>
  );
};
