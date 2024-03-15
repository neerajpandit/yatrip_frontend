import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Madhya from '../../components/Madhya/Madhya';


import AboutGallery from '../../components/AboutMadhyaPradesh/AboutGallery'


const MadhyaPradeshGallery = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="bg-[#F3EFEF]">
    <Madhya />
   <AboutGallery/>

      <Footer />
    </div>
  </div>
  )
}

export default MadhyaPradeshGallery