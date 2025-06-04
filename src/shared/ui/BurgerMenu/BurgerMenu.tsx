import { ReactNode } from "react";
import { motion } from "motion/react";
import { menuChildrenVariants } from "./lib/constants";
import styles from "./BurgerMenu.module.scss";

interface IBurgerMenuProps {
  menuItems: ReactNode | ReactNode[];
}

export const BurgerMenu = ({ menuItems }: IBurgerMenuProps) => {
  return (
    <div className={styles["burger-menu"]}>
      <motion.ul
        className={styles["burger-menu__list-items"]}
        {...menuChildrenVariants}
      >
        {menuItems}
      </motion.ul>
    </div>
  );
};
