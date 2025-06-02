import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useId,
} from "react";
import styles from "./Radio.module.scss";
import classNames from "classnames";

interface IRadioProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children: string | ReactNode;
  direction?: "left" | "right";
}

export const Radio = ({
  name,
  value,
  checked,
  disabled,
  onChange,
  direction = "left",
  children,
  ...props
}: IRadioProps) => {
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      if (onChange) {
        onChange(e);
      }
    }
  };

  return (
    <label
      className={classNames(styles["radio-input"], {
        [styles["radio-input--dir-right"]]: direction === "right",
      })}
      htmlFor={id}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      {children}
    </label>
  );
};
