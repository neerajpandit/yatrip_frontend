import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Keral from '../../components/Kerala/Keral';

import AboutGallery from '../../components/AboutKerala/AboutGallery'


const KeralaGallery = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="bg-[#F3EFEF]">
    <Keral />
   <AboutGallery/>

      <Footer />
    </div>
  </div>
  )
}

export default KeralaGallery