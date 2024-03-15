import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Spiritual from './Spiritual.jsx';
import Nature from './Nature.jsx';
import Adventure from './Adventure.jsx';
import PopularDestination from './PopularDestination.jsx';
import WildLife from './WildLife.jsx';
import Cultural from './Cultural.jsx';
import Travel from './Travel.jsx';
import UttarPradesh from './pages/UttarPradesh/UttarPradesh.jsx';

import Uttrakhand from './pages/Uttrakhand/Uttrakhand.jsx';




import UttarPradeshOverview from './pages/UttarPradesh/UttarPradeshOverview.jsx';
import UttarPradeshCities from './pages/UttarPradesh/UttarPradeshCities.jsx';
import UttarPradeshGallery from './pages/UttarPradesh/UttarPradeshGallery.jsx';
import AboutGalleryImage from './pages/UttarPradesh/AboutGalleryImage.jsx';
import UttrakhandOverview from './pages/Uttrakhand/UttrakhandOverview.jsx';
import UttrakhandCities from './pages/Uttrakhand/UttrakhandCities.jsx';
import UttrakhandGallery from './pages/Uttrakhand/UttrakhandGallery.jsx';
import GalleryImage from './pages/Uttrakhand/GalleryImage.jsx';

import Kerala from './pages/Kerala/Kerala.jsx';
import KeralaOverview from './pages/Kerala/KeralaOverview.jsx';
import KeralaCities from './pages/Kerala/KeralaCities.jsx';
import KeralaGallery from './pages/Kerala/KeralaGallery.jsx';
import AboutImage from './pages/Kerala/AboutImage.jsx';

import Rajasthan from './pages/Rajasthan/Rajasthan.jsx';
import RajasthanOverview from './pages/Rajasthan/RajasthanOverview.jsx';
import RajasthanCities from './pages/Rajasthan/RajasthanCities.jsx';
import RajasthanGallery from './pages/Rajasthan/RajasthanGallery.jsx';
import ImageR from './pages/Rajasthan/ImageR.jsx';

import MadhyaPradesh from './pages/MadhyaPradesh/MadhyaPradesh.jsx';
import MadhyaPradeshOverview from './pages/MadhyaPradesh/MadhyaPradeshOverview.jsx';
import MadhyaPradeshCities from './pages/MadhyaPradesh/MadhyaPradeshCities.jsx';
import MadhyaPradeshGallery from './pages/MadhyaPradesh/MadhyaPradeshGallery.jsx';
import Gallery from './pages/MadhyaPradesh/Gallery.jsx';

import HimachalPradesh from './pages/HimachalPradesh/HimachalPradesh.jsx';
import HimachalPradeshOverview from './pages/HimachalPradesh/HimachalPradeshOverview.jsx';
import HimachalPradeshCities from './pages/HimachalPradesh/HimachalPradeshCities.jsx';
import HimachalPradeshGallery from './pages/HimachalPradesh/HimachalPradeshGallery.jsx';
import ImageH from './pages/HimachalPradesh/ImageH.jsx';

import Goa from './pages/Goa/Goa.jsx';
import GoaOverview from './pages/Goa/GoaOverview.jsx';
import GoaCities from './pages/Goa/GoaCities.jsx';
import GoaGallery from './pages/Goa/GoaGallery.jsx';
import ImageG from './pages/Goa/ImageG.jsx';

// jammu
import Jammu from './pages/Jammu/Jammu.jsx';
import JammuOverview from './pages/Jammu/JammuOverview.jsx';
import JammuCities from './pages/Jammu/JammuCities.jsx';
import JammuGallery from './pages/Jammu/JammuGallery.jsx';
import ImageJ from './pages/Jammu/ImageJ.jsx';

import About from './pages/About/About.jsx';
import Blog from './pages/Blog/Blog.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/Spiritual" element={<Spiritual />} />
        <Route path="/Nature" element={<Nature />} />
        <Route path="/Adventure" element={<Adventure />} />
        <Route path="/PopularDestination" element={<PopularDestination />} />
        <Route path="/WildLife" element={<WildLife />} />
        <Route path="/Cultural" element={<Cultural />} />
        <Route path="/Travel" element={<Travel />} />

        {/* uttarpradesh */}
        <Route path="/UttarPradeshCities" element={<UttarPradeshCities />} />
        <Route path="/UttarPradesh" element={<UttarPradesh />} />
        <Route path="/UttarPradeshOverview" element={<UttarPradeshOverview />} />
        <Route path="/UttarPradeshGallery" element={<UttarPradeshGallery />} />
        <Route path="/gallery/id" element={<AboutGalleryImage />} />




        {/* uttrakhand */}

        <Route path="/Uttrakhand" element={<Uttrakhand />} />
        <Route path="/UttrakhandOverview" element={<UttrakhandOverview />} />
        <Route path="/UttrakhandCities" element={<UttrakhandCities />} />
        <Route path="/UttrakhandGallery" element={<UttrakhandGallery />} />
        <Route path="/gallery/id1" element={<GalleryImage />} />
        {/* Kerala */}
        <Route path="/Kerala" element={<Kerala />} />
        <Route path="/KeralaOverview" element={<KeralaOverview />} />
        <Route path="/KeralaCities" element={<KeralaCities />} />
        <Route path="/KeralaGallery" element={<KeralaGallery />} />
        <Route path="/gallery/id2" element={<AboutImage />} />
        {/* Rajasthan */}
        <Route path="/Rajasthan" element={<Rajasthan />} />
        <Route path="/RajasthanOverview" element={<RajasthanOverview />} />
        <Route path="/RajasthanCities" element={<RajasthanCities />} />
        <Route path="/RajasthanGallery" element={<RajasthanGallery />} />
        <Route path="/gallery/id3" element={<ImageR />} />
        {/* MadhyaPradesh */}
        <Route path="/MadhyaPradesh" element={<MadhyaPradesh />} />
        <Route path="/MadhyaPradeshOverview" element={<MadhyaPradeshOverview />} />
        <Route path="/MadhyaPradeshCities" element={<MadhyaPradeshCities />} />
        <Route path="/MadhyaPradeshGallery" element={<MadhyaPradeshGallery />} />
        <Route path="/gallery/id4" element={<Gallery />} />
 {/* HimachalPradesh */}
  <Route path="/HimachalPradesh" element={<HimachalPradesh />}/>
  <Route path="/HimachalPradeshOverview" element={<HimachalPradeshOverview />} />
  <Route path="/HimachalPradeshCities" element={<HimachalPradeshCities />} />
  <Route path="/HimachalPradeshGallery" element={<HimachalPradeshGallery />} />
  <Route path="/gallery/id5" element={<ImageH />} />
{/* `goa` */}
  <Route path="/Goa" element={<Goa/>}/>
  <Route path="/GoaOverview" element={<GoaOverview/>} />
  <Route path="/GoaCities" element={<GoaCities />} />
  <Route path="/GoaGallery" element={<GoaGallery />} />
  <Route path="/gallery/id6" element={<ImageG />} />
{/* jammu */}
<Route path="/Jammu" element={<Jammu/>}/>
<Route path="/JammuOverview" element={<JammuOverview/>} />
  <Route path="/JammuCities" element={<JammuCities />} />
  <Route path="/JammuGallery" element={<JammuGallery />} />
  <Route path="/gallery/id7" element={<ImageJ />} />


        
        <Route path="/MadhyaPradesh" element={<MadhyaPradesh />} />
        <Route path="/Kerala" element={<Kerala />} />
        <Route path="/Jammu" element={<Jammu />} />

        <Route path="/About" element={<About/>}/>
        <Route path="/Blog" element={<Blog/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);
