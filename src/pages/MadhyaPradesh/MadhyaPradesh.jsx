import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Madhya from '../../components/Madhya/Madhya';
import TourCard from '../../components/TourCards/TourCard';
const MadhyaPradesh = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
        <Madhya />
<TourCard/>

        <Footer />
      </div>
    </div>
  )
}

export default MadhyaPradesh