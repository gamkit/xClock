import { ReactNode } from "react";
import { motion } from "motion/react";
import { BurgerMenu, MenuItem } from "@/shared/ui";
import { Settings } from "@/shared/ui/icons/main";
import { Clock, Hourglass, Stopwatch } from "@/shared/ui/icons/time";
import { AppFrameAnimationWrapper, AppFrameLayout } from "./ui/AppFrameLayout";
import { useAppFrameState } from "./lib/useAppFrameState";
import { menuItemVariants, navLinks } from "./lib/constants";

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
                <motion.div
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MenuItem
                    key={link.id}
                    id={link.id}
                    onClick={() => menuItemClickHandler(link.path)}
                    label={link.label}
                    isActive={location.pathname === link.path}
                    Icon={iconsMap[link.id]}
                  />
                </motion.div>
              ))}
            </>
          }
        />
      ) : (
        <AppFrameAnimationWrapper>{children}</AppFrameAnimationWrapper>
      )}
    </AppFrameLayout>
  );
};
