import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import UttarK from '../../components/UttarK/UttarK';
import TourCard from '../../components/TourCards/TourCard';
const Uttrakhand = () => {
  return (
    <div className="relative">
    <Navbar />
    <div className="">
     <UttarK/>

<TourCard/>
      <Footer />
    </div>
  </div>
  )
}

export default Uttrakhand