import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import t from '../../assets/Travel/t.jpg';
// location icon
import { IoLocationOutline } from "react-icons/io5";

import { FaCity } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";

const AboutCities = () => {
    const [selectedCity, setSelectedCity] = useState('kochi');
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
                    onClick={() => setSelectedCity('kochi')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold ml-5`
                    }
                >
                    <FaCity className='text-2xl lg:text-[28px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'> Kochi (Cochin)</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('thiruvananthapuram')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }
                >
                    <GiByzantinTemple className='text-2xl lg:text-3xl' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Thiruvananthapuram </p>
                </NavLink>



                <NavLink
                    to=''
                    onClick={() => setSelectedCity('alappuzha')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }

                >
                    <MdTempleHindu className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Alappuzha</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('munnar')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }

                >
                    <GiByzantinTemple className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Munnar</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('kozhikode')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold mr-5`
                    }

                >
                    <FaCity className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Kozhikode</p>
                </NavLink>



            </div>


          
            {selectedCity === 'kochi' && (
<div className="agra">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4  border border-white rounded-lg shadow sm:p-8 bg-[#FFFFFF] dark:border-white mt-[5%] mb-[10%]">
   
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Kochi</h5>       
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
                        Fort Kochi
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
                        Chinese Fishing Nets
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
                        Marine Drive
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
                        Santa Cruz Basilica
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
                        Cherai Beach
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
                        Abad Pepper Route 
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
                        Fort Castle
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
                        Hotel Fort Queen
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
                        Fragrant Nature Kochi
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
                        Taj Malabar Resort & Spa 
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


  {selectedCity === 'thiruvananthapuram' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4  border border-white rounded-lg shadow sm:p-8 bg-[#FFFFFF] dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Thiruvananthapuram</h5>       
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
                        Sree Padmanabhaswamy Temple
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
                        Napier Museum
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
                        Kuthiramalika Palace Museum (Puthen Malika)
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
                        Kovalam Beach
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
                        Shanghumukham Beach
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
                        Hotel Horizon
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
                        Hotel Pankaj
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
                        Keys Select Hotel
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
                        Hycinth Hotels
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
                        Vivanta Thiruvananthapuram 
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

  {selectedCity === 'munnar' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Munnar</h5>       
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
                        Tea Gardens and Tea Museum
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
                        Eravikulam National Park
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
                        Mattupetty Dam and Lake
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
                        Top Station
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
                        Attukal Waterfalls
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
                        Tea County Munnar by Leisure Hotels
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
                        The Tall Trees Munnar
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
                        Windermere Estate
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
                        Club Mahindra Munnar
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
                        Spice Tree Munnar 
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

  {selectedCity === 'kozhikode' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Kozhikode</h5>       
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
                        Kozhikode Beach
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
                        Beypore Beach and Shipyard
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
                        Kappad Beach
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
                        Thusharagiri Waterfalls
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
                        Kadalundi Bird Sanctuary
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
                        Beach Hotel Calicut
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
                        The Raviz Calicut
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
                        Hotel Marina Residency
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
                        Green Gates Hotel
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
                        Kadavu Resort & Ayurveda Centre
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



  {selectedCity === 'alappuzha' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Alappuzha</h5>       
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
                        Alappuzha Backwaters
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
                        Alappuzha Beach
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
                        Kuttanad
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
                        Alappuzha Lighthouse
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
                        Punnamada Lake
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
                        Angel Queen Houseboats
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
                        Cosy Regency
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
                        Lake Palace Resort
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
                        Ramada by Wyndham Alleppey
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
                        The Oberoi Motor Vessel Vrinda
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