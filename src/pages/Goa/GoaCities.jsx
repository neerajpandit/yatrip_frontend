import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Go from '../../components/Goa/Go';
import AboutCities from '../../components/AboutGoa/AboutCities';



const GoaCities = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[#F3EFEF]">
    <Go/>

   <AboutCities/>

        <Footer />
      </div>
    </div>
  )
}

export default GoaCities