'use client';

import React, { Suspense, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Milky from './Milky';

const HeroBackground = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "200px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const manY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const planetsY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);

  return (
    <div ref={containerRef} className='inset-0 absolute pointer-events-none'>
      <div className='relative h-screen overflow-hidden'>

        {/* Background Sky - Dark space canvas */}
        <motion.div
          className='absolute inset-0 w-full h-screen z-0 bg-gradient-to-r from-[#0d0d0d] via-[#131212] to-[#1a1a1a]'
        />

        {/* 3D Milky Galaxy Canvas Layer */}
        <div className='absolute inset-0 w-full h-full z-[1] pointer-events-auto'>
          <Canvas 
            frameloop={isInView ? 'always' : 'never'}
            dpr={[1, 1.5]}
            gl={{ antialias: false, powerPreference: 'low-power' }}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            className='w-full h-full'>
            <Suspense fallback={null}>
              <Milky />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>

        {/* Planets Layer */}
        <motion.div
          className='absolute inset-0 top-10 left-70 w-full h-full z-[2] pointer-events-none'
          style={{
            backgroundImage: "url('/planets.png')",
            backgroundSize: 'contain',         
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',  
            x: planetsY,
            willChange: 'transform',
          }}
        />

        {/* Man Layer */}
        <motion.div
          className='absolute inset-0 w-full h-full z-[3] pointer-events-none'
          style={{
            backgroundImage: "url('/oneman2.png')",
            backgroundSize: 'auto 70%',        
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom', 
            x: manY,
            willChange: 'transform',
          }}
        />

      </div>
    </div>
  )
}

export default HeroBackground
