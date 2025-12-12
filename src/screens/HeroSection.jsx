import React from 'react'
import HeroElements from '../components/HeroElements'

const HeroSection = () => {
  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden px-5 md:px-20 lg:px-40'>
      <HeroElements />
    </section>
  )
}

export default HeroSection
