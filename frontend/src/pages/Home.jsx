import React from 'react'
import Begin from '../components/Begin';
import About from '../components/About';
import Footer from '../components/Footer'
import Hero from "../components/Hero"

function Home() {
  return (
    <div>
      <Begin/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
    
  )
}

export default Home