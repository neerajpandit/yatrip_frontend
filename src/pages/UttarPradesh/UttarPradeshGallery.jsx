import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Uttar from '../../components/Uttar/Uttar';
import AboutGallery from '../../components/AboutUttarPradesh/AboutGallery'


const UttarPradeshGallery = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="bg-[#F3EFEF]">
      <Uttar />
   <AboutGallery/>

      <Footer />
    </div>
  </div>
  )
}

export default UttarPradeshGallery