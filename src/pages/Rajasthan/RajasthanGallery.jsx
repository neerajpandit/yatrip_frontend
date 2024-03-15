import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Rajas from '../../components/Rajasthan/Rajas';


import AboutGallery from '../../components/AboutRajasthan/AboutGallery'


const RajasthanGallery = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="bg-[#F3EFEF]">
    <Rajas />
   <AboutGallery/>

      <Footer />
    </div>
  </div>
  )
}

export default RajasthanGallery