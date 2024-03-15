import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Rajas from '../../components/Rajasthan/Rajas';
import TourCard from '../../components/TourCards/TourCard';
const Rajasthan = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
        <Rajas />
<TourCard/>

        <Footer />
      </div>
    </div>
  )
}

export default Rajasthan