import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Himachal from '../../components/Himachal/Himachal';
import TourCard from '../../components/TourCards/TourCard';
// import Keral from '../../components/Kerala/Keral';

const HimachalPradesh = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
        {/* <Keral /> */}
        <Himachal/>
<TourCard/>

        <Footer />
      </div>
    </div>
  )
}

export default HimachalPradesh