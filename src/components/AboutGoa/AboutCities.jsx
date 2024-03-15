import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import t from '../../assets/Travel/t.jpg';
// location icon
import { IoLocationOutline } from "react-icons/io5";

import { FaCity } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";

const AboutCities = () => {
    const [selectedCity, setSelectedCity] = useState('oldgoa');
    const handleDirections = (location) => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${location}`);
    }

    return (
        <div className=''>

            <div className='bg-[#FFFFFF] md:bg-[#F3EFEF] rounded-[12px] overflow-hidden
                    flex justify-center items-center md:gap-4 mb-5
                    '>
                <NavLink
                    to=""
                    end
                    onClick={() => setSelectedCity(' oldgoa')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold ml-5`
                    }
                >
                    <FaCity className='text-2xl lg:text-[28px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'> Old Goa</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('Baga')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }
                >
                    <GiByzantinTemple className='text-2xl lg:text-3xl' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Baga </p>
                </NavLink>



                <NavLink
                    to=''
                    onClick={() => setSelectedCity('Calangute')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }

                >
                    <MdTempleHindu className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Calangute</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('Sanguem')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }

                >
                    <GiByzantinTemple className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Sanguem</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('Panaji')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold mr-5`
                    }

                >
                    <FaCity className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Panaji</p>
                </NavLink>



            </div>


          
{selectedCity === 'oldgoa' && (
<div className="oldgoa">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4  border border-white rounded-lg shadow sm:p-8 bg-[#FFFFFF] dark:border-white mt-[5%] mb-[10%]">
   
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Old Goa</h5>       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-white">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black truncate ">
                        Basilica of Bom Jesus
                        </p>                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Se Cathedral
                        </p>
                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Church of St. Francis of Assisi
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Church of St. Cajetan
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Archaeological Museum of Goa
                        </p>
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
   </div>

<div>
   <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Accommodation</h5>
       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-white">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4 " >
                        <p class="text-sm font-medium text-black truncate ">
                        Hotel Erika
                        </p>                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Viva Goa International
                        </p>
                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Grace Guest House
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Hotel Rajadhyax
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Alfonso Guest House   
                        </p>
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
</div>
   
</div>
</div>
            )}


  {selectedCity === 'Baga' && (
<div className="Baga">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4  border border-white rounded-lg shadow sm:p-8 bg-[#FFFFFF] dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Baga</h5>       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-white">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black truncate ">
                        Baga Beach
                        </p>                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Water Sports
                        </p>
                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Saturday Night Market
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Tito's Lane
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Dolphin Cruises
                        </p>
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
   </div>

<div>
   <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Accommodation</h5>
       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-white">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4 " >
                        <p class="text-sm font-medium text-black truncate ">
                        Casa de Baga by Verda
                        </p>                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Hotel Temple On GangesNazri Resort
                        </p>
                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Resort Rio
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Taj Holiday Village Resort & Spa
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Casa Baga Boutique Hotel 
                        </p>
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
</div>
</div>
</div>
  )}

  {selectedCity === 'Calangute' && (
<div className="Calangute">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in  Calangute</h5>       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-white">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black truncate ">
                        Calangute Beach
                        </p>                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        St. Alex Church
                        </p>
                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Water Sports
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Calangute Market Square
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Nightlife
                        </p>
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
   </div>

<div>
   <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Accommodation</h5>
       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-white">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4 " >
                        <p class="text-sm font-medium text-black truncate ">
                        Hotel Golden Tulip Goa
                        </p>                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Neelam's The Grand
                        </p>
                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Hard Rock Hotel Goa
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Resort De Coracao
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Aldeia Santa Rita 
                        </p>
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
</div>
</div>
</div>
  )}

  {selectedCity === 'Panaji' && (
<div className="Panaji">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Panaji</h5>       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-white">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black truncate ">
                        Fontainhas:
                        </p>                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Dona Paula
                        </p>
                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Church of Our Lady of the Immaculate Conception
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Goa State Museum
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Miramar Beach
                        </p>
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
   </div>

<div>
   <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Accommodation</h5>
       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-white">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4 " >
                        <p class="text-sm font-medium text-black truncate ">
                        Vivanta Goa, Panaji
                        </p>                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Hotel Fidalgo
                        </p>
                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        The Crown Goa
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Panaji Residency
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        WelcomHeritage Panjim Pousada  
                        </p>
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
</div>
</div>
</div>
  )}



  {selectedCity === 'Sanguem' && (
<div className="Sanguem">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Sanguem</h5>       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-white">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black truncate ">
                        Dudhsagar Falls
                        </p>                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Tambdi Surla Temple
                        </p>
                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Bhagwan Mahavir Wildlife Sanctuary
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Devil's Canyon
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={t} alt="Neil image"/>
                    
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Netravali Wildlife Sanctuary
                        </p>
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
   </div>

<div>
   <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Accommodation</h5>
       
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-white">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4 " >
                        <p class="text-sm font-medium text-black truncate ">
                        Wildernest Nature Resort
                        </p>                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        The Dudhsagar Spa Resort
                        </p>
                       
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Nature's Nest Resort
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        Farmagudi Hill Retreat
                        </p>
                      
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                <div class="flex-shrink-0 cursor-pointer"  onClick={() => handleDirections(selectedCity)}>
                    <IoLocationOutline className='text-2xl lg:text-3xl'/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-black">
                        The Queeny Hotel  
                        </p>
                       
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
</div>
</div>
</div>
  )}



        </div>
    )
}

export default AboutCities