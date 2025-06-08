import { ReactNode } from "react";
import styles from "./SettingsLayout.module.scss";

interface ISettingsLayoutProps {
  settingsList: ReactNode;
}

export const SettingsLayout = ({ settingsList }: ISettingsLayoutProps) => {
  return (
    <div className={styles["settings-container"]}>
      {settingsList}
    </div>
  );
};
