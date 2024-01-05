// <--------- Loader --------->

export const loaderVariants = {
  initial: {
    y: 0,
    transition: { ease: 'easeInOut', duration: 1.5 },
  },
  exit: {
    y: '-100vh',
    transition: { ease: 'easeInOut', duration: 1.5 },
  },
}
// <--------- Loader --------->

// <--------- Navbar --------->

export const navVarents = {
  hidden: {
    opacity: 0,
    y: '100vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 35,
      delay: 1.2,
      ease: 'easeInOut',
    },
    y: 0,
    opacity: 1,
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: 'easeInOut',
      duration: 2,
    },
  },
}
export const navVarentsLogo = {
  hidden: {
    opacity: 0,
    y: '100vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 35,
      delay: 1.6,
      ease: 'easeInOut',
    },
    y: 0,
    opacity: 1,
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: 'easeInOut',
      duration: 2,
    },
  },
}

// <--------- Navbar --------->

// <--------- HomeGrid --------->

export const firstGrdVariant = {
  hidden: {
    opacity: 0,
    x: '-180vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 40,
      delay: 1.6,
      ease: 'easeInOut',
    },
    x: 0,
    opacity: 1,
  },
  exit: {
    x: '-100vh',
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
}
export const secondGrdVariant = {
  hidden: {
    opacity: 0,
    y: '-200vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 40,
      delay: 2.2,
      ease: 'easeInOut',
    },
    y: 0,
    opacity: 1,
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
}
export const thirdGrdVariant = {
  hidden: {
    opacity: 0,
    x: '100vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 40,
      delay: 2.6,
      ease: 'easeInOut',
    },
    x: 0,
    opacity: 1,
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
}
export const forthGrdVariant = {
  hidden: {
    opacity: 0,
    y: '200vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 40,
      delay: 3,
      ease: 'easeInOut',
    },
    y: 0,
    opacity: 1,
  },
  exit: {
    y: '100vh',
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
}
export const fifthGrdVariant = {
  hidden: {
    opacity: 0,
    x: '180vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 40,
      delay: 3.4,
      ease: 'easeInOut',
    },
    x: 0,
    opacity: 1,
  },
  exit: {
    x: '100vh',
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
}

// <--------- Dock --------->

export const dokVariants = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 60,
      delay: 1.8,
      ease: 'easeInOut',
     
    },
    y: 0,
    opacity: 1,
  },
  exit: {
    y: '100vh',
    transition: {
      ease: 'easeInOut',
      duration: 1.3,
    },
  },
}
export const dokBallVariants = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 60,
      delay: 2,
      ease: 'easeInOut',
    },
    y: 0,
    opacity: 1,
  },
  exit: {
    y: '100vh',
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
}

export const icntapVar = {
  whileTap: {
    scale: 0.5,
  },
}

// <--------- Dock --------->

// <--------- Babylon --------->

export const babylonScrollvariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 200,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      type: 'spring',
      stiffness: 50,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 200,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
}

// <--------- Babylon --------->