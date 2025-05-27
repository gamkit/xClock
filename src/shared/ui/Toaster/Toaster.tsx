import { Toaster as ReactHotToaster, ToasterProps } from "react-hot-toast";
import styles from "./Toaster.module.scss";
import classNames from "classnames";

export const Toaster = ({ toastOptions, ...props }: ToasterProps) => {
  return (
    <ReactHotToaster
      toastOptions={{
        success: {
          className: classNames(styles["toaster"], styles["toaster--success"]),
          duration: 110000,
        },
        error: {
          className: classNames(styles["toaster"], styles["toaster--error"]),
          duration: 110000,
        },
        ...toastOptions,
      }}
      {...props}
    />
  );
};
