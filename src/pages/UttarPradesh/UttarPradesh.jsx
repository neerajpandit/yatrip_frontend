import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Uttar from '../../components/Uttar/Uttar';
import TourCard from '../../components/TourCards/TourCard';
const UttarPradesh = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
        <Uttar />
<TourCard/>

        <Footer />
      </div>
    </div>
  )
}

export default UttarPradesh