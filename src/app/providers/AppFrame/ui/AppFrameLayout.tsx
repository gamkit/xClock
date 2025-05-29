import { ReactNode } from "react";
import { Button } from "@/shared/ui";
import { Burger, Cross } from "@/shared/ui/icons/main";
import styles from "./AppFrameLayout.module.scss";

interface IAppFrameLayoutProps {
  children: ReactNode;
  isMenuOpen: boolean;
  isBurgerBtnHide: boolean;
  onBurgerClick: () => void;
}

export const AppFrameLayout = ({
  children,
  isMenuOpen,
  isBurgerBtnHide,
  onBurgerClick,
}: IAppFrameLayoutProps) => {
  return (
    <div className={styles['frame-container']}>
      {children}
      {isBurgerBtnHide && (
        <Button
          className={styles["app-frame__burger-button"]}
          bType="ghost"
          Icon={isMenuOpen ? <Cross size={32} /> : <Burger size={32} />}
          onClick={() => onBurgerClick()}
        />
      )}
    </div>
  );
};
