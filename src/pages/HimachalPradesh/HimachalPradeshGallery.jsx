import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Himachal from '../../components/Himachal/Himachal';
import AboutGallery from '../../components/AboutHimachal/AboutGallery';



const HimachalPradeshGallery = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="bg-[#F3EFEF]">
   
   <Himachal/>
   <AboutGallery/>

      <Footer />
    </div>
  </div>
  )
}

export default HimachalPradeshGallery