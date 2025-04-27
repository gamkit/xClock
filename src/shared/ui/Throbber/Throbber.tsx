import classNames from "classnames";
import styles from "./Throbber.module.scss";

interface IProps {
  bgColor?: string;
  className?: string;
}

export const Throbber = ({ bgColor, className }: IProps) => {
  return (
    <div className={classNames(className, styles["throbber"])}>
      {Array.from({ length: 3 }).map((_, index) => (
        <span
          key={index}
          style={{ backgroundColor: bgColor }}
          className={styles["throbber__item"]}
        />
      ))}
    </div>
  );
};
