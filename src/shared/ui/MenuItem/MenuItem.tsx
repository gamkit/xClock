import classNames from "classnames";
import { Button } from "@/shared/ui";
import { TMenuItem } from "./types";
import styles from "./MenuItem.module.scss";

interface IMenuProps extends TMenuItem {
  onClick: () => void;
}

export const MenuItem = ({ label, Icon, onClick, isActive }: IMenuProps) => {
  return (
    <div
      className={classNames(
        styles["menu-item"],
        isActive && styles["menu-item--active"]
      )}
    >
      <Button
        className={styles["menu-item__link-button"]}
        onClick={onClick}
        Icon={Icon}
      />

      <p className={styles["menu-item__title"]}>{label}</p>
    </div>
  );
};
