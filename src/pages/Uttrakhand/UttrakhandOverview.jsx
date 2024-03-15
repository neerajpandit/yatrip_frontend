import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import UttarK from '../../components/UttarK/UttarK';
import AboutUttra from '../../components/AboutUttrakhand/AboutUttra'

const UttarPradeshOverview = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
        <UttarK />
        <AboutUttra/>
        <Footer />
      </div>
    </div>
  )
}

export default UttarPradeshOverview