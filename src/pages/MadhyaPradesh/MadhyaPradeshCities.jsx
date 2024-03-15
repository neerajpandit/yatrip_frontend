import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Madhya from '../../components/Madhya/Madhya';

import AboutCities from '../../components/AboutMadhyaPradesh/AboutCities'


const MadhyaPradeshCities = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[#F3EFEF]">
      <Madhya />
        <AboutCities/>

        <Footer />
      </div>
    </div>
  )
}

export default MadhyaPradeshCities