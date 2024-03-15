import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Go from '../../components/Goa/Go';
import AboutGoa from '../../components/AboutGoa/AboutGoa';

const GoaOverview = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
    <Go/>
   <AboutGoa/>
        <Footer />
      </div>
    </div>
  )
}

export default GoaOverview