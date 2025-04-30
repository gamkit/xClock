import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type TButtonSize = "sm" | "md" | "lg";
export type TButtonType = "action" | "outline" | "ghost";

export type TBaseButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
