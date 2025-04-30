import { TButtonSize } from "@/shared/ui/buttons/Button/types";
import { CSSProperties } from "react";

export const getIconStylesBySize = (
  size: TButtonSize,
  hasOnlyIcon: boolean
): CSSProperties => {
  switch (size) {
    case "lg": {
      return {
        padding: !hasOnlyIcon ? "10px 20px" : "10px",
      };
    }
    case "md": {
      return {
        padding: !hasOnlyIcon ? "6px 12px" : "6px",
      };
    }
    case "sm": {
      return {
        padding: !hasOnlyIcon ? "3px 6px" : "3px",
      };
    }
    default: {
      return {
        padding: !hasOnlyIcon ? "10px 20px" : "10px",
      };
    }
  }
};
