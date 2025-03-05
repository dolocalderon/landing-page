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

export const slideInLeft = (delay = 0) => {
    return {
        initial: {
            x: -50,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay,
            }
        }
    };
};

export const zoomEffect = (delay = 0) => ({
    initial: { scale: 1 },
    animate: { 
        scale: [1, 1.3, 1],  // Hace un zoom y luego regresa
        transition: { 
            duration: 1, 
            delay,
            times: [0, 0.5, 1], // En qué momentos se deben aplicar los valores de escala
        }
    },
    exit: { 
        scale: 1, 
        transition: { duration: 1 } // Regresa al estado original
    }
});

export const fadeIn = (duration = 1) => {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }, 
      transition: { duration }
    };
};