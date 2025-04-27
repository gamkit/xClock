import { ReactNode } from "react";

export type TMenuItem = {
  id: string | number;
  label: string;
  isActive?: boolean;
  Icon?: ReactNode;
};
