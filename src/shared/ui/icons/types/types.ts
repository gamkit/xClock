import { ReactNode } from "react";

export type TSvgSizeProps =
  | {
      size: number;
      width?: never;
      height?: never;
    }
  | {
      size?: never;
      width: number;
      height: number;
    }
  | {
      size?: never;
      width?: never;
      height?: never;
    };

export type TBaseSvgProps = {
  id: string;
  viewBox: string;
  role?: string;
  children?: ReactNode;
  onClick?: () => void;
} & TSvgSizeProps;