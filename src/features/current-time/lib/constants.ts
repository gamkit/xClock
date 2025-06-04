// Animations

export const clockDigitsVariants = {
  animate: "visible",
  initial: "hidden",
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  },
  transition: {
    duration: 0.2,
  },
};

export const clockDateVariants = {
  animate: "visible",
  initial: "hidden",
  variants: {
    hidden: {
      y: 15,
      opacity: 0,
    },
    visible: { y: 0, opacity: 1 },
  },
};
