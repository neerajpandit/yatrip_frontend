import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Cult from './components/Cult/Cult';
import Hero from './components/Hero/Hero';
const Cultural = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="mt-15">
    <Hero />   

<Cult/>
    </div>
    </div>
  )
}

export default Cultural