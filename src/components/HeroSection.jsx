import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { images } from '../utils/constants';
import { fadeIn } from '../utils/motion';



const HeroSection = () => {

const [index, setIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 7000);

    return () => clearInterval(interval);
}, []);


  return (
    <div className='relative w-full h-[300px] sm:h-[300px] md:h-[350px] overflow-hidden mt-12'>

      {images.map((src, i) => (
        <motion.img
        key={i}
        src={src}
        alt='Not Found'
        className='absolute w-full h-full object-cover'
        {...fadeIn(1)}
        animate={{ opacity: i === index ? 1 : 0}}
        />
      ))}
    </div>
  )
}

export default HeroSection

