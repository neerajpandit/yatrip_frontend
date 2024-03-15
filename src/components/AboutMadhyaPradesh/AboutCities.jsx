import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import t from '../../assets/Travel/t.jpg';
// location icon
import { IoLocationOutline } from "react-icons/io5";

import { FaCity } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";

const AboutCities = () => {
    const [selectedCity, setSelectedCity] = useState('bhopal');
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
                    onClick={() => setSelectedCity('bhopal')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold ml-5`
                    }
                >
                    <FaCity className='text-2xl lg:text-[28px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'> Bhopal</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('indore')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }
                >
                    <GiByzantinTemple className='text-2xl lg:text-3xl' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Indore </p>
                </NavLink>



                <NavLink
                    to=''
                    onClick={() => setSelectedCity('gwalior')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }

                >
                    <MdTempleHindu className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Gwalior</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('khajuraho')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }

                >
                    <GiByzantinTemple className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Khajuraho</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('ujjain')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold mr-5`
                    }

                >
                    <FaCity className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Ujjain</p>
                </NavLink>



            </div>


          
            {selectedCity === 'bhopal' && (
<div className="agra">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4  border border-white rounded-lg shadow sm:p-8 bg-[#FFFFFF] dark:border-white mt-[5%] mb-[10%]">
   
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Bhopal</h5>       
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
                        Sanchi Stupa
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
                        Upper Lake (Bhojtal)
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
                        Van Vihar National Park
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
                        Bhimbetka Caves
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
                        Taj-ul-Masajid
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
                        Hotel Suruchi
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
                        Hotel Lake View Ashok
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
                        Noor-Us-Sabah Palace
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
                        Hotel Shree Vinayak Palace
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
                        Jehan Numa Palace Hotel  
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


  {selectedCity === 'indore' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4  border border-white rounded-lg shadow sm:p-8 bg-[#FFFFFF] dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Indore</h5>       
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
                        Rajwada Palace
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
                        Sarafa Bazaar
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
                        Kanch Mandir (Glass Temple)
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
                        Central Museum (Indore Museum)
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
                        Patalpani Waterfall
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
                        Lemon Tree Hotel
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
                        Hotel Golden Gate
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
                        Hotel Winway
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
                        The Jungle Farmhouse
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
                        Rajshree Resort 
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

  {selectedCity === 'khajuraho' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Khajuraho</h5>       
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
                        Khajuraho Group of Monuments
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
                        Western Group of Temples
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
                        Eastern Group of Temples
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
                        Jain Group of Temples
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
                        Khajuraho Archaeological Museum
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
                        Hotel Harmony
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
                        Hotel Isabel Palace
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
                        Hotel Chandela
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
                        Clarks Khajuraho
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
                        The Lalit Temple View Khajuraho 
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

  {selectedCity === 'ujjain' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Ujjain</h5>       
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
                        Mahakaleshwar Jyotirlinga Temple
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
                        Kal Bhairav Temple
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
                        Ram Ghat
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
                        Harsiddhi Temple
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
                        Vedh Shala (Jantar Mantar)
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
                        Hotel Anjushree Ujjain
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
                        Hotel Raj Palace Ujjain
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
                        Hotel Ashray
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
                        Hotel Atharva
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
                        Hotel Imperial Ujjain
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



  {selectedCity === 'gwalior' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Gwalior</h5>       
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
                        Gwalior Fort
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
                        Jai Vilas Palace
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
                        Tansen's Tomb
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
                        Gujari Mahal Archaeological Museum
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
                        Sun Temple (Surya Mandir)
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
                        Hotel Silver Oak 
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
                        Hotel Rajhans
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
                        Hotel The Vinayak
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
                        Hotel Shri Laxmi Palace
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
                        Hotel Rajhans
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