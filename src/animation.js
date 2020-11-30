export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 2.5 },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const NavAnim = {
  hidden: { x: -200 },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 1,
    },
  },
};

export const slidercontainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

export const FadeDown = {
  hidden: { opacity: 0, y: -20 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeIn", duration: 0.5, delay: 0.3 },
  },
};
export const FadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

export const scrollReaveal = {
    hidden: {
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.7 },
    },
  
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 },
     
    },

    
  };
  
