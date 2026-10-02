'use client';

import React, { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Header from './components/Header'
import HeroSection from './screens/HeroSection'
import About from './screens/About'
import Project from './screens/Project'
import Experience from './screens/Experience'
import Contact from './screens/Contact'
import Footer from './components/Footer'
import Research from './screens/Research'
import Recommendations from './screens/Recommendations'

import CustomCursor from './components/CustomCursor'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#05080e] text-slate-100 overflow-x-hidden selection:bg-[#ff8c32]/30 selection:text-white">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Ambient background glows with dedicated GPU compositing layer to prevent scroll paint lag */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu [transform:translateZ(0)]">
        <div className="absolute top-[15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[rgb(8,165,202)]/5 blur-[120px] will-change-transform" />
        <div className="absolute top-[40%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#ff8c32]/5 blur-[130px] will-change-transform" />
        <div className="absolute top-[70%] left-[10%] w-[650px] h-[650px] rounded-full bg-teal-500/5 blur-[120px] will-change-transform" />
      </div>

      <div className="relative z-10 w-full">
        <Header />

        {/* Full-width Edge-to-Edge Hero Section */}
        <div className="w-full">
          <HeroSection />
        </div>

        {/* Content sections with widescreen layout */}
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8">
          <About />
          <Experience />
          <Project />
          <Research />
          {/* <Recommendations /> */}
          <Contact />
        </div>

        {/* Full-width Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
