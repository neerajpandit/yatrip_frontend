import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Wild from './components/Wild/Wild';

const WildLife = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="mt-15">
    <Hero />    
     <Wild/>
    </div>
  </div>
);
}

export default WildLife