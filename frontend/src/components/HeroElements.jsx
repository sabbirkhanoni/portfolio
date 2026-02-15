import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroElements = () => {
  const wordList = ["Problem-Solver", "AI-Focused", "Fast Adaptive", "Performance-Focused"]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.20, 
        delayChildren: 0.5
      }
    },
  }

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const flipAnimate = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      className="z-11 mt-40 lg:mt-30 text-center md:text-left rounded-3xl md:mt-40 bg-clip-text"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex-col justify-items-center-safe md:justify-items-center-safe md:flex">

        <motion.h1 className="text-sm flex gap-2 md:text-md lg:text-lg font-bold text-white" variants={item}>
          <p className='mt-5'>Hi! I'm</p> <span className='text-[70px] bg-gradient-to-r from-[rgb(218,219,223)] to-[rgb(255,14,14)] bg-clip-text text-transparent' style={{ fontFamily: 'Acorn, sans-serif'}}>MD SABBIR KHAN ONI</span>
        </motion.h1>

        <motion.h2
          className="dm-serif-text-regular-italic text-sm md:text-lg lg:text-7xl font-bold bg-gradient-to-r from-[rgb(218,219,223)] to-[rgb(30,251,1)] bg-clip-text text-transparent"
          variants={item}
        >
          SOFTWARE
        </motion.h2>

        <motion.h2
          className="dm-serif-text-regular-italic text-sm md:text-lg lg:text-7xl font-bold bg-gradient-to-r from-[rgb(218,219,223)] to-[rgb(30,251,1)] bg-clip-text text-transparent"
          variants={item}
        >
          ENGINEER
        </motion.h2>

        <motion.div
          
          className="font-space text-[rgb(0,255,255)] font-bold text-xl md:text-2xl lg:text-3xl mb-3 h-12 md:h-16 lg:h-20 flex items-center justify-center md:justify-start overflow-hidden "
          style={{fontFamily: 'Acorn, sans-serif'}}
          variants={flipAnimate}
        >
          <FlipWords words={wordList} />
        </motion.div>

        <motion.h2
          className="text-xs italic  md:text-md lg:text-sm text-white"
          variants={item}
        >
          System Design & Architecture Solutions, AI Integrated Web Development & Deployment.
        </motion.h2>

      </div>
    </motion.div>
  )
}

export default HeroElements
