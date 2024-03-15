import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Kashmir from '../../components/Jammu/Kashmir';
import AboutCities from '../../components/AboutJammu/AboutCities';



const JammuCities = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[#F3EFEF]">
   <Kashmir/>
   <AboutCities/>

        <Footer />
      </div>
    </div>
  )
}

export default JammuCities