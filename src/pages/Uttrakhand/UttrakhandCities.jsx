import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import UttarK from '../../components/UttarK/UttarK';
import AboutCities from '../../components/AboutUttrakhand/AboutCities'


const UttrakhandCities = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[#F3EFEF]">
        <UttarK />
        <AboutCities/>

        <Footer />
      </div>
    </div>
  )
}

export default UttrakhandCities