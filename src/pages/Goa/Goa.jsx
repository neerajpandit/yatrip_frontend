import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Go from '../../components/Goa/Go';   
import TourCard from '../../components/TourCards/TourCard';
const Goa = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
     
       <Go/>
       <TourCard/>
    


        <Footer />
      </div>
    </div>
  )
}

export default Goa