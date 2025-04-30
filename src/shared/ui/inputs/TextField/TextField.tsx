import classNames from "classnames";
import styles from "./TextField.module.scss";

import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";

interface ITextFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  errorMessage?: string;
  Icon?: ReactNode;
  isFullWidth?: boolean;
  label?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = forwardRef(function TextField(
  props: ITextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const {
    className,
    defaultValue,
    errorMessage,
    Icon,
    isFullWidth,
    label,
    onChange,
    required,
    ...rest
  } = props;

  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div
      className={classNames(className, styles["text-field"], {
        [styles["text-field--fullwidth"]]: isFullWidth,
      })}
    >
      {label && <p className={styles["text-field__label"]}>{label}</p>}
      <div
        className={classNames(styles["text-field__wrapper"], {
          [styles["text-field__wrapper--required"]]: required,
          [styles["text-field__wrapper--with-icon"]]: !!Icon,
        })}
      >
        <input
          className={classNames(styles["text-field__field"], {
            [styles["text-field__field--filled"]]: !!value,
            [styles["text-field__field--error"]]: !!errorMessage,
          })}
          ref={ref}
          required={required}
          defaultValue={defaultValue}
          onChange={handleChange}
          {...rest}
        />
        {Icon && <i className={styles["text-field__icon"]}>{Icon}</i>}
      </div>
      {!!errorMessage && (
        <p className={styles["text-field__error-message"]}></p>
      )}
    </div>
  );
});
