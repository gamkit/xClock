import { TMenuItem } from "@/shared/ui/MenuItem";

type TNavMenuItem = TMenuItem & {
  path: string;
};

export const navLinks: TNavMenuItem[] = [
  {
    id: "clock",
    label: "Часы",
    path: "/clock",
  },
  {
    id: "timer",
    label: "Таймер",
    path: "/timer",
  },
  {
    id: "stopwatch",
    label: "Секундомер",
    path: "/stopwatch",
  },
  {
    id: "settings",
    label: "Настройки",
    path: "/settings",
  },
];

// Animations
export const appFrameWapperVariants = {
  animate: "visible",
  initial: "hidden",
  variants: {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
    },
  },
  transition: {
    duration: 0.15,
    ease: "easeIn",
  },
};

export const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
