import { ReactNode } from "react";
import { Button, Frame } from "@/shared/ui";
import { Burger } from "@/shared/ui/icons/main";
import styles from "./AppFrameLayout.module.scss";

interface IAppFrameLayoutProps {
  children: ReactNode;
  isMenuOpen: boolean;
  onBurgerClick: () => void;
}

export const AppFrameLayout = ({
  children,
  isMenuOpen,
  onBurgerClick,
}: IAppFrameLayoutProps) => {
  return (
    <Frame backgroundColor={isMenuOpen ? "#fff" : undefined}>
      {children}
      <Button
        className={styles["app-frame__burger-button"]}
        bType="ghost"
        Icon={<Burger width={36} height={24} />}
        onClick={() => onBurgerClick()}
      />
    </Frame>
  );
};
