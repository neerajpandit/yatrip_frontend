import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Himachal from '../../components/Himachal/Himachal';
import AboutHimachal from '../../components/AboutHimachal/AboutHimachal';

const HimachalPradeshOverview = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
      <Himachal/>
       <AboutHimachal/>
        <Footer />
      </div>
    </div>
  )
}

export default HimachalPradeshOverview