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
