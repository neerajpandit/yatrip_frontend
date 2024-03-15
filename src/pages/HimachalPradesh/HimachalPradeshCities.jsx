import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


import Himachal from '../../components/Himachal/Himachal';
import AboutCities from '../../components/AboutHimachal/AboutCities';


const HimachalPradeshCities = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[#F3EFEF]">
      <Himachal/>
     <AboutCities/>

        <Footer />
      </div>
    </div>
  )
}

export default HimachalPradeshCities