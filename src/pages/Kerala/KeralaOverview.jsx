import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Keral from '../../components/Kerala/Keral';
import AboutKerala from '../../components/AboutKerala/AboutKerala'

const KeralaOverview = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
        <Keral />
        <AboutKerala/>
        <Footer />
      </div>
    </div>
  )
}

export default KeralaOverview