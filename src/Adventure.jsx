import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Adven from './components/Adven/Adven';


const Adventure = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="mt-15">
    <Hero />
    
   
   
     <Adven/>
    </div>
  </div>
);
}

export default Adventure