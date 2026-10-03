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
    <div className="relative min-h-screen bg-[#05080e] text-slate-100 overflow-x-hidden selection:bg-[rgb(8,165,202)]/30 selection:text-white">

      {/* Ambient background glows - symmetrically centered so gutters never discolor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(ellipse at center, rgba(8,165,202,0.04) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(ellipse at center, rgba(14,116,144,0.03) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(ellipse at center, rgba(20,184,166,0.03) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full">
        <Header />

        {/* Full-width Edge-to-Edge Hero Section */}
        <div className="w-full">
          <HeroSection />
        </div>

        {/* Content sections with unified single-source padding and alignment */}
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
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
