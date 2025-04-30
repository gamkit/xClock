import classNames from "classnames";
import styles from "./Digit.module.scss";

interface IDigitProps {
  children: string;
  size?: "lg" | "sm";
  tAlign?: "left" | "center" | "right";
  className?: string;
}

export const Digit = ({
  children,
  size = "lg",
  tAlign = "left",
  className,
}: IDigitProps) => {
  return (
    <div
      className={classNames(className, styles["digit"], {
        [styles["digit--size-lg"]]: size === "lg",
        [styles["digit--size-sm"]]: size === "sm",
      })}
      style={{
        textAlign: tAlign,
      }}
    >
      {children}
    </div>
  );
};
