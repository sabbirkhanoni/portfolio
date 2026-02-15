import React, { lazy, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Suspense } from 'react';
//lazy load SplashCursor
const FluidBackground = lazy(() => import("../components/FluidBackground"));
const Milky = lazy(() => import("../components/Milky"));

const HeroBackground = () => {
  const {scrollYProgress} = useScroll()
  const xSpring = useSpring(scrollYProgress, { damping: 70 });
  const manY = useTransform(xSpring, [0,0.5], ["0%", "10%"]);
  const planetsY = useTransform(xSpring, [0,0.5], ["0%", "50%"]);

  return (
    <section className='inset-0 absolute'>
      <div className='relative h-screen overflow-hidden'>

        {/* Background Sky */}
        <motion.div
          className='absolute inset-0 w-full h-screen -z-50 bg-[rgba(13,13,13)]'
          style={{
          }}
        />


        {/* <Suspense fallback={null}>
          <FluidBackground />
        </Suspense> */}

        <Canvas 
            dpr={[1, 1.5]}
            gl={{ antialias: false, powerPreference: 'low-power' }}
            className='absolute inset-0 w-full top-0 -z-40'>
          <Milky />
          <OrbitControls enableZoom={false} />
        </Canvas>


        {/* Man Layer */}
        <motion.div
          className='absolute inset-0 w-full h-full -z-30'
          style={{
            backgroundImage: "url('/oneman2.png')",
            backgroundSize: 'auto 70%',        // keeps man proportion & visible
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom', // places man at bottom
            x: manY,
          }}
        />

        {/* Planets Layer */}
        <motion.div
          className='absolute inset-0 top-10 left-70 w-full h-full -z-30'
          style={{
            backgroundImage: "url('/planets.png')",
            backgroundSize: 'contain',         // keeps planets visible without cropping
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',  // planets stay at top
            x: planetsY,
          }}
        />

      </div>
    </section>
  )
}

export default HeroBackground
