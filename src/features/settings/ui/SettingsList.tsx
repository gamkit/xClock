import { Radio } from "@/shared/ui";
import styles from "./SettingsList.module.scss";
import { TTheme } from "@/shared/lib/contexts/ThemeContext";
import { TTimeFormat } from "../lib/useSettingsState";
import { TIME_FORMAT_12H, TIME_FORMAT_24H } from "@/shared/const/storage";

interface ISettingsListProps {
  currentTimeFormat: TTimeFormat;
  currentTheme: TTheme;
  onChangeTimeFormat: (format: TTimeFormat) => void;
  onChangeTheme: () => void;
}

export const SettingsList = ({
  currentTimeFormat,
  currentTheme,
  onChangeTimeFormat,
  onChangeTheme,
}: ISettingsListProps) => {
  const handleChangeTimeFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeTimeFormat(e.target.value as TTimeFormat);
  };

  return (
    <div className="settings-list">
      <div className={styles["settings-list__item"]}>
        <p>Формат времени</p>
        <div className={styles["settings-list__controls"]}>
          <Radio
            value={TIME_FORMAT_24H}
            checked={currentTimeFormat === TIME_FORMAT_24H}
            name="timeFormat"
            onChange={handleChangeTimeFormat}
          >
            24H
          </Radio>
          <Radio
            value="AM"
            name="timeFormat"
            checked={currentTimeFormat === TIME_FORMAT_12H}
            onChange={handleChangeTimeFormat}
          >
            12H
          </Radio>
        </div>
      </div>
      <div className={styles["settings-list__item"]}>
        <p>Тема</p>
        <div className={styles["settings-list__controls"]}>
          <Radio
            value="light"
            name="theme"
            checked={currentTheme === "light"}
            onChange={() => onChangeTheme()}
          >
            Светлая
          </Radio>
          <Radio
            value="dark"
            name="theme"
            checked={currentTheme === "dark"}
            onChange={() => onChangeTheme()}
          >
            Темная
          </Radio>
        </div>
      </div>
    </div>
  );
};
