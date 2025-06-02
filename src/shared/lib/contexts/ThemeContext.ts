import { createContext } from "react";

export type TTheme = "light" | "dark";

interface IThemeContextType {
  theme: TTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContextType | null>(null);
