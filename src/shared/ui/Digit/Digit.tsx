import classNames from "classnames";
import styles from "./Digit.module.scss";

interface IDigitProps {
  children: string;
  className?: string;
}

export const Digit = ({ children, className }: IDigitProps) => {
  return (
    <div className={classNames(className, styles["digit"])}>{children}</div>
  );
};
