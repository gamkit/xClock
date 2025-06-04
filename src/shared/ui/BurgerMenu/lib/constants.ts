export const menuChildrenVariants = {
  animate: "open",
  initial: "closed",
  variants: {
    open: {
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
  },
};
