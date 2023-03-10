export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const routeAnimate = {
  initial: {
    opacity:0
  },
  animate: {
    opacity:1,
    transition: {
      delay: .2,
      duration:.2
    },
  },
};
