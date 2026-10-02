'use client';

import React from 'react'
import dynamic from 'next/dynamic'
import HeroElements from '../components/HeroElements'

const HeroBackground = dynamic(() => import('../components/HeroBackground'), {
  ssr: false,
})

const HeroSection = () => {
  return (
    <section id='home' className='relative w-full flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden px-5 md:px-20 lg:px-40 bg-[#0d0d0d]'>
      <HeroElements />
      <HeroBackground />
    </section>
  )
}

export default HeroSection
