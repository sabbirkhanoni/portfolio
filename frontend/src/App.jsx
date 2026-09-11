import React from 'react'
import Header from './components/Header'
import HeroSection from './screens/HeroSection'
import About from './screens/About'
import Project from './screens/Project'
import Experience from './screens/Experience'
import Contact from './screens/Contact'
import Footer from './components/Footer'
import Research from './screens/Research'
import Recommendations from './screens/Recommendations'
import GithubContributions from './components/GitHubContrinutions'

const App = () => {
  return (
    <div
     className= "container mx-auto max-w-8xl scroll-smooth">
      <Header />
      <HeroSection />
      <About />
      <Experience />
      <GithubContributions />
      <Project />
      <Research />
      {/* <Recommendations /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
