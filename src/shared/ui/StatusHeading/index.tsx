import cn from "classnames";
import styles from "./StatusHeading.module.scss";
import { motion } from "motion/react";

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
    <motion.h1
      key={children}
      className={cn(styles["status-heading"], className, {
        [styles["status-heading--active"]]: status === "active",
        [styles["status-heading--processing"]]: status === "processing",
        [styles["status-heading--size-lg"]]: size === "lg",
        [styles["status-heading--size-sm"]]: size === "sm",
      })}
      style={{ color }}
    
      initial={{ filter: "blur(15px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      &nbsp;{children}
    </motion.h1>
  );
};
