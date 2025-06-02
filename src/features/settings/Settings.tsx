import { useSettingsState } from "./lib/useSettingsState";
import { SettingsLayout } from "./ui/SettingsLayout";
import { SettingsList } from "./ui/SettingsList";

export const Settings = () => {
  const { theme, timeFormat, handleChangeTheme, handleChangeTimeFormat } =
    useSettingsState();

  return (
    <SettingsLayout
      settingsList={
        <SettingsList
          currentTheme={theme}
          currentTimeFormat={timeFormat}
          onChangeTheme={handleChangeTheme}
          onChangeTimeFormat={handleChangeTimeFormat}
        />
      }
    />
  );
};
