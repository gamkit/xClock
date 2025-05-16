import { TMenuItem } from "@/shared/ui/MenuItem";

type TNavMenuItem = TMenuItem & {
    slug: string;
    path: string;
  };
  
  export const navLinks: TNavMenuItem[] = [
    {
      id: "1",
      label: "Часы",
      slug: "clock",
      path: "/clock",
    },
    {
      id: "2",
      label: "Таймер",
      slug: "timer",
      path: "/timer",
    },
    {
      id: "3",
      label: "Секундомер",
      slug: "stopwatch",
      path: "/stopwatch",
    },
    {
      id: "4",
      label: "Настройки",
      slug: "settings",
      path: "/settings",
    },
  ];