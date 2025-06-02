import { ReactNode, useEffect, useState } from "react";
import { ThemeContext, TTheme } from "@/shared/lib/contexts/ThemeContext";
import {
  APP_THEME_DARK,
  APP_THEME_LIGHT,
  GET_APP_THEME,
} from "@/shared/const/storage";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>(APP_THEME_LIGHT);

  useEffect(() => {
    const savedTheme = localStorage.getItem(GET_APP_THEME) as TTheme | null;
    const isSysPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme =
      savedTheme || (isSysPrefersDark ? APP_THEME_DARK : APP_THEME_LIGHT);
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === APP_THEME_LIGHT ? APP_THEME_DARK : APP_THEME_LIGHT;
    setTheme(newTheme);
    localStorage.setItem(GET_APP_THEME, newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
