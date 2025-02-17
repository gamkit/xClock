import cn from "classnames";
import styles from "./StatusHeading.module.scss";

export type TStatuses = "active" | "starting";
export type TSizes = "lg" | "sm";

interface IStatusHeadingProps {
  children: string;
  status?: TStatuses;
  size?: TSizes;
  color?: string;
  className?: string;
}

export const StatusHeading = ({
  children,
  status = "active",
  size = "lg",
  color,
  className,
}: IStatusHeadingProps) => {
  return (
    <h1
      className={cn(styles["status-heading"], className, {
        [styles["status-heading--active"]]: status === "active",
        [styles["status-heading--starting"]]: status === "starting",
        [styles["status-heading--size-lg"]]: size === "lg",
        [styles["status-heading--size-sm"]]: size === "sm",
      })}
      style={{ color }}
    >
      {children}
    </h1>
  );
};
