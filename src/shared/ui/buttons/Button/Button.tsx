import { ReactNode } from "react";
import classNames from "classnames";
import { Throbber } from "@/shared/ui";
import { getIconStylesBySize } from "./lib/getIconStylesBySize";
import { TBaseButtonProps, TButtonSize, TButtonType } from "./types";
import styles from "./Button.module.scss";

interface IButtonProps extends TBaseButtonProps {
  children?: ReactNode | ReactNode[] | undefined;
  size?: TButtonSize;
  bType?: TButtonType;
  rounded?: boolean;
  Icon?: ReactNode;
  isLoading?: boolean;
  className?: string;
}

export const Button = ({
  children,
  size = "lg",
  bType = "action",
  rounded = false,
  isLoading = false,
  Icon,
  className,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={classNames(className, styles["button"], {
        [styles["button--type-action"]]: bType === "action",
        [styles["button--type-outline"]]: bType === "outline",
        [styles["button--type-ghost"]]: bType === "ghost",
        [styles["button--size-lg"]]: size === "lg",
        [styles["button--size-md"]]: size === "md",
        [styles["button--size-sm"]]: size === "sm",
        [styles["button--rounded"]]: rounded,
        [styles["button--loading"]]: isLoading,
      })}
      style={getIconStylesBySize(size, !!Icon)}
      {...rest}
    >
      {isLoading ? (
        <Throbber />
      ) : (
        <>
          {Icon}
          {children}
        </>
      )}
    </button>
  );
};
