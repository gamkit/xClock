import { ReactNode } from "react";
import styles from "./SettingsLayout.module.scss";
import { Toaster } from "@/shared/ui";

interface ISettingsLayoutProps {
  settingsList: ReactNode;
}

export const SettingsLayout = ({ settingsList }: ISettingsLayoutProps) => {
  return (
    <div className={styles["settings-container"]}>
      {settingsList}
      <Toaster position="top-right"/>
    </div>
  );
};
