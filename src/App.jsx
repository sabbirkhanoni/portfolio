import React from 'react'
import Header from './screens/Header'
import HeroSection from './screens/HeroSection'
import About from './screens/About'

const App = () => {
  return (
    <div
     className= "container mx-auto max-w-8xl">
      <Header />
      <HeroSection />
      <About />
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
    </div>
  )
}

export default App
