import { ReactNode } from "react";
import { BurgerMenu, MenuItem } from "@/shared/ui";
import { Settings } from "@/shared/ui/icons/main";
import { Clock, Hourglass, Stopwatch } from "@/shared/ui/icons/time";
import { AppFrameLayout } from "./ui/AppFrameLayout";
import { useAppFrameState } from "./lib/useAppFrameState";
import { navLinks } from "./lib/constants";

const iconsMap: Record<string, ReactNode> = {
  clock: <Clock />,
  timer: <Hourglass />,
  stopwatch: <Stopwatch />,
  settings: <Settings />,
};

export const AppFrame = ({ children }: { children: ReactNode }) => {
  const {
    isMenuOpen,
    burgerClickHandler,
    menuItemClickHandler,
    location,
    timerStatus,
    stopwatchStatus,
  } = useAppFrameState();

  return (
    <AppFrameLayout
      isMenuOpen={isMenuOpen}
      onBurgerClick={burgerClickHandler}
      isBurgerBtnHide={
        timerStatus === "waiting" && stopwatchStatus === "waiting"
      }
    >
      {isMenuOpen ? (
        <BurgerMenu
          menuItems={
            <>
              {navLinks.map((link) => (
                <MenuItem
                  key={link.id}
                  id={link.id}
                  onClick={() => menuItemClickHandler(link.path)}
                  label={link.label}
                  isActive={location.pathname === link.path}
                  Icon={iconsMap[link.id]}
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
