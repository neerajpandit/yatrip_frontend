import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AboutJammu from '../../components/AboutJammu/AboutJammu';

import Kashmir from '../../components/Jammu/Kashmir';

const JammuOverview = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="">
      <Kashmir/>
      <AboutJammu/>
        <Footer />
      </div>
    </div>
  )
}

export default JammuOverview