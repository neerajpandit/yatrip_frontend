import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Kashmir from '../../components/Jammu/Kashmir';
import TourCard from '../../components/TourCards/TourCard';
const Jammu = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
       
<Kashmir/>
<TourCard/>
        <Footer />
      </div>
    </div>
  )
}

export default Jammu