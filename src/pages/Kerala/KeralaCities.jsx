import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Keral from '../../components/Kerala/Keral';

import AboutCities from '../../components/AboutKerala/AboutCities'


const KeralaCities = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[#F3EFEF]">
        <Keral />
        <AboutCities/>

        <Footer />
      </div>
    </div>
  )
}

export default KeralaCities