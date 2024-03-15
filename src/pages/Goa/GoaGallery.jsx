import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Go from '../../components/Goa/Go';
import AboutGallery from '../../components/AboutGoa/AboutGallery';



const GoaGallery = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="bg-[#F3EFEF]">
   
  <Go/>
  <AboutGallery/>

      <Footer />
    </div>
  </div>
  )
}

export default GoaGallery