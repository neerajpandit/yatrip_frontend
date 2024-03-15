import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Keral from '../../components/Kerala/Keral';
import TourCard from '../../components/TourCards/TourCard';
const Kerala = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
        <Keral />
<TourCard/>

        <Footer />
      </div>
    </div>
  )
}

export default Kerala