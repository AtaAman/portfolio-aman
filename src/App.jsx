import { useState } from 'react'
import { Navbar } from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import { Abouts } from './components/abouts'
import LocomotiveScroll from 'locomotive-scroll';
import Skills from './components/skills'
import Project from './components/project'
import Footer from './components/footer'

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full overflow-hidden min-h-screen bg-gray-100 text-[#121212]' >
      <Navbar/>
      <Hero/>
      <About/>
      <Abouts />
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
