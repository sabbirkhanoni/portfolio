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

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
    <div className="container mx-auto max-w-8xl">
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
  )
}

export default App
