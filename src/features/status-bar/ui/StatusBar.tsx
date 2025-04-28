import { StatusHeading } from "@/shared/ui";
import { selectCurrentScreenLabel } from "@/features/navigation";
import { EStatusLabels } from "../lib/constants";
import styles from "./StatusBar.module.scss";
import { useAppSelector } from "@/shared/lib/redux/hooks";

export const StatusBar = () => {
  const currentScreenLabel = useAppSelector(selectCurrentScreenLabel);

  return (
    <div className={styles["status-bar"]}>
      <StatusHeading size="sm">Часы</StatusHeading>
      <StatusHeading>{EStatusLabels[currentScreenLabel]}</StatusHeading>
    </div>
  );
};
