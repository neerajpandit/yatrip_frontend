import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Rajas from '../../components/Rajasthan/Rajas';
import AboutRajasthan from '../../components/AboutRajasthan/AboutRajasthan'

const RajasthanOverview = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
        <Rajas/>
        <AboutRajasthan/>
        <Footer />
      </div>
    </div>
  )
}

export default RajasthanOverview