'use client';

import dynamic from 'next/dynamic'
import Header from './components/Header'
import HeroSection from './screens/HeroSection'
import About from './screens/About'

// Dynamic code-splitting for bottom sections to minimize initial JavaScript bundle size
const Experience = dynamic(() => import('./screens/Experience'))
const Project = dynamic(() => import('./screens/Project'))
const Research = dynamic(() => import('./screens/Research'))
const Contact = dynamic(() => import('./screens/Contact'))

import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#05080e] text-slate-100 overflow-x-hidden selection:bg-[#ff8c32]/30 selection:text-white">

      {/* Ambient background glows using GPU-friendly radial gradients with zero paint lag */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[10%] left-[-10%] w-[650px] h-[650px] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(8,165,202,0.07) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[40%] right-[-10%] w-[750px] h-[750px] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(255,140,50,0.06) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[70%] left-[10%] w-[700px] h-[700px] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)' }}
        />
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
