import { ReactNode } from "react";
import styles from "./BurgerMenu.module.scss";

interface IBurgerMenuProps {
  menuItems: ReactNode | ReactNode[];
}

export const BurgerMenu = ({ menuItems }: IBurgerMenuProps) => {
  return (
    <div className={styles["burger-menu"]}>
      <ul className={styles["burger-menu__list-items"]}>{menuItems}</ul>
    </div>
  );
};
