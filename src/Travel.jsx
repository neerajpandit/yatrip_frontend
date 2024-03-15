import React from 'react'
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import HeroTravel from './components/Hero/HeroTravel';

import Tour from './components/Tour/Tour';

const Travel = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="mt-15">
    <HeroTravel/>
   
    <Tour/>
   
    {/* <Footer/> */}
  
    </div>
    </div>
  )
}

export default Travel
