import React from 'react'
import HeroElements from '../components/HeroElements'
import HeroBackground from '../components/HeroBackground'
import { Canvas } from '@react-three/fiber'
import {Earth} from '../components/Earth'
import { OrbitControls } from '@react-three/drei'

const HeroSection = () => {
  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden px-5 md:px-20 lg:px-40'>
      <HeroElements />
      <HeroBackground />
      <figure
        className='absolute inset-0'
        style={{
          width: '200vh',
          height: '200vh',
        }}
      >
        {/* <Canvas>
          <Earth />
          <OrbitControls />
        </Canvas> */}
      </figure>
    </section>
  )
}

export default HeroSection
