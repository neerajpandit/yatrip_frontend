import  { useState, useEffect } from 'react';
import { register } from "swiper/element/bundle";
// import axios from 'axios';
import NatureDPick from './NatureDPick';
import SmallNavbar from '../SmallNavbar/SmallNavbar';
import Filter from "../Filter/Filter";
import yotan from '../../assets/Nature/yotan.jpg';
import stok from '../../assets/Nature/stok.webp';
import nubra from '../../assets/Nature/nubra.jpg';
import nohkal from '../../assets/Nature/nohkal.jpeg';
import nanda from '../../assets/Nature/nanda.jpg';
import drang from '../../assets/Nature/drang.jpeg';
import khajjar from '../../assets/Nature/khajjar.webp';
import chandra from '../../assets/Nature/chandra.jpeg';
import dal from '../../assets/Nature/dal.jpeg';
import valley from '../../assets/Nature/valley.jpeg';
import ghats from '../../assets/Nature/ghats.webp';
import sand from '../../assets/Nature/sand.webp';

register();

const NatureD = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [displayedItems, setDisplayedItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const loadMore = () => {
    setDisplayedItems(displayedItems + 3);
  };

  const natureData = [
    { image: yotan, name: "Yumthang Valley", city: "Sikkim", state: "Sikkim" },
    { image: stok, name: "Stok Kangri", city: "Ladakh", state: "Ladakh" },
    { image: nubra, name: "Nubra Valley", city: "Ladakh", state: "Ladakh" },
    { image: nohkal, name: "Nohkalikai Falls", city: "Cherrapunji", state: "Meghalaya" },
    { image: nanda, name: "Nanda Devi", city: "Uttarakhand", state: "Uttarakhand" },
    { image: drang, name: "Drang Drung Glacier", city: "Kargil", state: "Ladakh" },
    { image: khajjar, name: "Khajjiar", city: "Himachal Pradesh", state: "Himachal Pradesh" },
    { image: chandra, name: "Chandertal Lake", city: "Himachal Pradesh", state: "Himachal Pradesh" },
    { image: dal, name: "Dal Lake", city: "Srinagar", state: "Jammu and Kashmir" },
    { image: valley, name: "Valley Of Flowers", city: "Chamoli", state: "Uttarakhand" },
    { image: ghats, name: "Ghats", city: "Varanasi", state: "Uttar Pradesh" },
    { image: sand, name: "Sand Dunes", city: "Jaisalmer", state: "Rajasthan" },
  ];

  return (
    <div>
      <div className="mt-8">
        <SmallNavbar />
      </div>

      <div className="container mx-auto my-8">
        <div className="flex justify-center items-center py-2 xl:py-3">
          <h4 className="font-SulphurPoint font-normal text-center text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D] mb-4">
            Nature
          </h4>
        </div>

        <div className="flex">
          {window.innerWidth >= 768 && (
            <div className="w-1/4 p-4">
              <Filter />
            </div>
          )}

          <div className="w-3/4">
            <div className={`grid grid-cols-1 md:grid-cols-3 ml-10 ${isMobile ? 'ml-20' : ''}`}>
              {natureData.slice(0, displayedItems).map((item, index) => (
                <div key={index} className={`${isMobile ? 'w-full' : ''} cursor-pointer`}>
                  <NatureDPick image={item.image} name={item.name} city={item.city} state={item.state} />
                </div>
              ))}
            </div>

            {displayedItems < natureData.length && (
              <button
                className="mt-4 mx-auto w-[100%] bg-white-800 text-gray-600 px-4 py-2 rounded border border-gray-600 hover:bg-white hover:text-gray-600"
                onClick={loadMore}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureD;
