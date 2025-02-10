export const variant = {
  hidden: { opacity: 0, x: "20%" },
  show: { opacity: [0, 0.5, 1], x: 0, transition: { duration: 1 } },
  exit: { opacity: 0, x: "20%" },
};

export const ulVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: [0.5, 0.8, 1],
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

export const liVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: [0.4, 0.8, 1], transition: { delay: 1 } },
};
