import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Uttar from '../../components/Uttar/Uttar';
import AboutCities from '../../components/AboutUttarPradesh/AboutCities'


const UttarPradeshCities = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[#F3EFEF]">
        <Uttar />
        <AboutCities/>

        <Footer />
      </div>
    </div>
  )
}

export default UttarPradeshCities