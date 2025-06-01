import { ThemeContext } from "../contexts/ThemeContext";
import { useStrictContext } from "./useStrictContext";

export const useTheme = () => {
  const context = useStrictContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
