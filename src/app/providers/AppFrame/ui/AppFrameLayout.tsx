import { ReactNode } from "react";
import { Button, Frame } from "@/shared/ui";
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
    <Frame backgroundColor={isMenuOpen ? "#fff" : undefined}>
      {children}
      {isBurgerBtnHide && (
        <Button
          className={styles["app-frame__burger-button"]}
          bType="ghost"
          Icon={isMenuOpen ? <Cross size={32} /> : <Burger size={32} />}
          onClick={() => onBurgerClick()}
        />
      )}
    </Frame>
  );
};
