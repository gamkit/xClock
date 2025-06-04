// Animations

export const modalWindowVariants = {
  variants: {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  },
  transition: {
    duration: 0.3,
    ease: "backInOut",
  },
  animate: "open",
  initial: "closed",
};
