import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Kashmir from '../../components/Jammu/Kashmir';
import AboutGallery from '../../components/AboutJammu/AboutGallery';


const JammuGallery = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="bg-[#F3EFEF]">
    <Kashmir/>
    <AboutGallery/>
   

      <Footer />
    </div>
  </div>
  )
}

export default JammuGallery