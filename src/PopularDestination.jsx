import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PopularD from './components/PopularD/PopularD';


const PopularDestination = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="mt-15">
    <Hero />


<PopularD/>
</div>
    </div>
  );
}

export default PopularDestination