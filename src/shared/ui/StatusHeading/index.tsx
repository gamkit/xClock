import cn from "classnames";
import styles from "./StatusHeading.module.scss";

export type TStatuses = "active" | "processing";
export type TSizes = "lg" | "sm";

interface IStatusHeadingProps {
  children: string | null;
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
        [styles["status-heading--processing"]]: status === "processing",
        [styles["status-heading--size-lg"]]: size === "lg",
        [styles["status-heading--size-sm"]]: size === "sm",
      })}
      style={{ color }}
    >
      &nbsp;{children}
    </h1>
  );
};
