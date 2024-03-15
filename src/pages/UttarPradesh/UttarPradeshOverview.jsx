import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Uttar from '../../components/Uttar/Uttar';
import AboutUttar from '../../components/AboutUttarPradesh/AboutUttar'

const UttarPradeshOverview = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
        <Uttar />
        <AboutUttar/>
        <Footer />
      </div>
    </div>
  )
}

export default UttarPradeshOverview