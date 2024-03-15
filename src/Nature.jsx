import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import NatureD from './components/NatureD/NatureD';

const Nature = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="mt-15">
    <Hero />
    
     <NatureD/>
    </div>
  </div>
);
}

export default Nature