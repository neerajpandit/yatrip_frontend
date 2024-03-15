import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Rajas from '../../components/Rajasthan/Rajas';

import AboutCities from '../../components/AboutRajasthan/AboutCities'


const RajasthanCities = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[#F3EFEF]">
      <Rajas/>
        <AboutCities/>

        <Footer />
      </div>
    </div>
  )
}

export default RajasthanCities