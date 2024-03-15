import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destination from './components/Destination/Destination';
import Month from './components/Month/Month';
// import Popular from './components/Popular/Popular';
import Room from './components/Room/Room';
import Hotel from './components/Hotel/Hotel';
import HotelSmall from './components/HotelSmall/HotelSmall';
import Team from './components/Team/Team';
import SearchBox from './components/SearchBox/SearchBox';
import Footer from './components/Footer/Footer';
import BestPlace from './components/BestPlace/BestPlace';

function Layout() {
  return (
    <div className="relative">
      <Navbar />

      <div className="mt-15">
        
        <Hero />
    <Destination/>
   
    {/* <Popular/> */}
    <BestPlace/>
    <Month/> 
    <Hotel/>
    <HotelSmall/>
    {/* <Room/> */}
   
<Team/>


    <Footer/>
      </div>
    </div>
  );
}

export default Layout;
