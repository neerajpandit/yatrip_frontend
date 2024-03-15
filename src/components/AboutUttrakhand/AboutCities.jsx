import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import t from '../../assets/Travel/t.jpg';
// location icon
import { IoLocationOutline } from "react-icons/io5";

import { FaCity } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";

const AboutCities = () => {
    const [selectedCity, setSelectedCity] = useState('rishikesh');
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
                    onClick={() => setSelectedCity('rishikesh')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold ml-5`
                    }
                >
                    <FaCity className='text-2xl lg:text-[28px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Rishikesh</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('haridwar')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }
                >
                    <GiByzantinTemple className='text-2xl lg:text-3xl' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Haridwar</p>
                </NavLink>



                <NavLink
                    to=''
                    onClick={() => setSelectedCity('dehradun')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }

                >
                    <MdTempleHindu className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Dehradun</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('mussoorie')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }

                >
                    <GiByzantinTemple className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Mussoorie</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('nainital')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold mr-5`
                    }

                >
                    <FaCity className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Nainital</p>
                </NavLink>



            </div>


          
            {selectedCity === 'rishikesh' && (
<div className="agra">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4  border border-white rounded-lg shadow sm:p-8 bg-[#FFFFFF] dark:border-white mt-[5%] mb-[10%]">
   
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Rishikesh</h5>       
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
                        Laxman Jhula and Ram Jhula
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
                        Triveni Ghat
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
                        Parmarth Niketan Ashram
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
                        Neelkanth Mahadev Temple
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
                        Rajaji National Park
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
                        Hotel Ganga Kinare 
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
                        Hotel The Amaris
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
                        Parmarth Niketan Ashram
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
                        Aloha on The Ganges
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
                        Glass House on The Ganges 
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


  {selectedCity === 'haridwar' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4  border border-white rounded-lg shadow sm:p-8 bg-[#FFFFFF] dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Haridwar</h5>       
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
                        Har Ki Pauri
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
                        Mansa Devi Temple
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
                        Chandi Devi Temple
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
                        Haridwar Market
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
                        Rajaji National Park
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
                        Hotel Ganga Sadan
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
                        Hotel City Park
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
                        Hotel La Casa
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
                        Hotel Alpana
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
                        The Haveli Hari Ganga by Leisure Hotels 
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

  {selectedCity === 'mussoorie' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Mussoorie</h5>       
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
                        Gun Hill
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
                        Kempty Falls
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
                        Camel's Back Road
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
                        Lal Tibba
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
                        Company Garden
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
                        Hotel Sun N Snow
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
                        Hotel Classic Heights
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
                        Hotel Abhinandan Grand
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
                        Hotel Brentwood Sanctuary
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
                        Hotel Mall Palace  
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

  {selectedCity === 'nainital' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Nainital</h5>       
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
                        Naini Lake
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
                        Naina Devi Temple
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
                        Snow View Point
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
                        Tiffin Top (Dorothy's Seat)
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
                        Mall Road
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
                        Hotel Himalaya
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
                        The Pavilion
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
                        The Naini Retreat
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
                        Shervani Hilltop 
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
                        Hotel Manu Maharani
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



  {selectedCity === 'dehradun' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Dehradun</h5>       
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
                        Robber's Cave (Guchhupani)
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
                        Sahastradhara
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
                        Tapkeshwar Temple
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
                        Forest Research Institute (FRI)
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
                        Mindrolling Monastery
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
                        Hotel Forest View
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
                        Hotel Sun Park Inn
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
                        Hotel Vishal Residency
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
                        Hotel Rajpur Heights
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
                        Lemon Tree Hotel 
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