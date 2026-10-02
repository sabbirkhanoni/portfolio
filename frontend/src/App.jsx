import React, { useEffect } from 'react'
import Lenis from 'lenis'
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
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#05080e] text-slate-100 overflow-x-hidden selection:bg-[#ff8c32]/30 selection:text-white">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Ambient background glows for super premium depth */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[rgb(8,165,202)]/5 blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#ff8c32]/5 blur-[160px]" />
        <div className="absolute top-[70%] left-[10%] w-[650px] h-[650px] rounded-full bg-teal-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8">
        <Header />
        <HeroSection />
        <About />
        <Experience />
        <Project />
        <Research />
        {/* <Recommendations /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
