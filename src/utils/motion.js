export const slipeUp = (delay) => {
    return {
        initial: {
            y: -50,
            opacity: 0,
        },
        animate: {
            y:0,
            opacity:1,
            transition: {
                duration:0.5,
                delay
            }
        }
    }
}

export const fadeIn = (duration = 1) => {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }, 
      transition: { duration }
    };
  };