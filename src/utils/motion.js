// <--------- Navbar --------->

export const navVarents = {
  hidden: {
    y: '-200vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 41,
      delay: 1.5,
    },
    y: 0,
  },
}
export const navVarentsLogo = {
  hidden: {
    y: '-200vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 41,
      delay: 1.8,
    },
    y: 0,
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
      stiffness: 150,
      delay: 1.8,
    },
    x: 0,
    opacity: 1,
  },
}
export const secondGrdVariant = {
  hidden: {
 
    y: '-200vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 50,
      delay: 2.4,
    },
    y: 0,
 
  },
}
export const thirdGrdVariant = {
  hidden: {
  
    x: '100vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 50,
      delay: 2.8,
    },
    x: 0,
  
  },
}
export const forthGrdVariant = {
  hidden: {

    y: '200vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 50,
      delay: 3.2,
    },
    y: 0,
  
  },
}
export const fifthGrdVariant = {
  hidden: {
  
    x: '180vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 50,
      delay: 3.6,
    },
    x: 0,
 
  },
}

// <--------- Dock --------->

export const dokVariants = {
  hidden: {
    y: '100vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 60,
      delay: 2,
    },
    y: 0,
  },
  exit:{
    y:'-100vh',
    transition:{
      ease:''
    }
  }
}
export const dokBallVariants = {
  hidden: {
    y: '100vh',
  },
  visible: {
    transition: {
      type: 'spring',
      stiffness: 60,
      delay: 2.2,
    },
    y: 0,
  },
  exit:{
    y:'-100vh',
    transition:{
      ease:'easeInOut',
      duration:1
    }
  }
}

// <--------- Dock --------->
