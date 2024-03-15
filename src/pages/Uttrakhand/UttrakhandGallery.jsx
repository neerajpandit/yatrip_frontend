import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import UttarK from '../../components/UttarK/UttarK';
import AboutGallery from '../../components/AboutUttrakhand/AboutGallery'


const UttrakhandGallery = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="bg-[#F3EFEF]">
      <UttarK />
   <AboutGallery/>

      <Footer />
    </div>
  </div>
  )
}

export default UttrakhandGallery