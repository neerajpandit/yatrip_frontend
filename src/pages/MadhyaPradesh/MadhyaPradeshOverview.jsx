import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Madhya from '../../components/Madhya/Madhya';

import AboutMadhyaPradesh from '../../components/AboutMadhyaPradesh/AboutMadhyaPradesh'

const MadhyaPradeshOverview = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
      <Madhya />
        <AboutMadhyaPradesh/>
        <Footer />
      </div>
    </div>
  )
}

export default MadhyaPradeshOverview