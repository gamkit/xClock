import { ReactNode } from "react";
import { BurgerMenu, MenuItem } from "@/shared/ui";
import { Info } from "@/shared/ui/icons/main";
import { AppFrameLayout } from "./ui/AppFrameLayout";
import { useBurgerMenu } from "./lib/useBurgerMenu";
import { navLinks } from "./lib/constants";

export const AppFrame = ({ children }: { children: ReactNode }) => {
  const { isMenuOpen, burgerClickHandler, menuItemClickHandler, location } =
    useBurgerMenu();

  return (
    <AppFrameLayout isMenuOpen={isMenuOpen} onBurgerClick={burgerClickHandler}>
      {isMenuOpen ? (
        <BurgerMenu
          menuItems={
            <>
              {navLinks.map((link) => (
                <MenuItem
                  key={link.id}
                  id={link.id}
                  onClick={() => menuItemClickHandler(link.path, link.slug)}
                  label={link.label}
                  isActive={location.pathname === link.path}
                  Icon={<Info />}
                />
              ))}
            </>
          }
        />
      ) : (
        children
      )}
    </AppFrameLayout>
  );
};
