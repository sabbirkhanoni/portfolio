import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroElements = () => {
  const wordList = ["Problem-Solver", "AI-Focused", "Adaptive", "Performance-Focused"]

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
      className="z-11 mt-50 lg:mt-70 text-center md:text-left rounded-3xl md:mt-40 bg-clip-text"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex-col justify-items-center-safe md:justify-items-center-safe md:flex gap-5">

        <motion.h1
          className="text-md flex gap-2 md:text-xl lg:text-2xl font-bold text-white"
          variants={item}
        >
          Hi! I'm <h2 className='text-[rgb(0,255,255)]'>Md Sabbir Khan Oni</h2>
        </motion.h1>

        <motion.h2
          className="text-sm md:text-lg lg:text-lg text-white mb-3"
          variants={item}
        >
          A Software Engineer
        </motion.h2>

        <motion.div
          className="text-[rgb(0,255,255)] font-bold text-xl md:text-2xl lg:text-6xl"
          variants={flipAnimate}
        >
          <FlipWords words={wordList} />
        </motion.div>

        <motion.h2
          className="text-xs md:text-md lg:text-sm text-white"
          variants={item}
        >
          System Design & Architecture Solutions, AI Integrated Web Development & Deployment.
        </motion.h2>

      </div>
    </motion.div>
  )
}

export default HeroElements
