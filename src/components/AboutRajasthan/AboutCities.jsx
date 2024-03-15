import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import t from '../../assets/Travel/t.jpg';
// location icon
import { IoLocationOutline } from "react-icons/io5";

import { FaCity } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";

const AboutCities = () => {
    const [selectedCity, setSelectedCity] = useState('jaipur');
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
                    onClick={() => setSelectedCity('jaipur')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold ml-5`
                    }
                >
                    <FaCity className='text-2xl lg:text-[28px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'> Jaipur</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('jodhpur')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }
                >
                    <GiByzantinTemple className='text-2xl lg:text-3xl' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Jodhpur </p>
                </NavLink>



                <NavLink
                    to=''
                    onClick={() => setSelectedCity('jaisalmer')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }

                >
                    <MdTempleHindu className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Jaisalmer</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('udaipur')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                    }

                >
                    <GiByzantinTemple className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Udaipur</p>
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => setSelectedCity('pushkar')}
                    className={({ isActive }) =>
                        `${isActive ? 'text-[#D66F11]' : 'text-[#989898]'} flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold mr-5`
                    }

                >
                    <FaCity className='text-2xl lg:text-[26px]' />
                    <p className='font-DMSans text-base lg:text-lg xl:text-xl'>Pushkar</p>
                </NavLink>



            </div>


          
            {selectedCity === 'jaipur' && (
<div className="agra">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4  border border-white rounded-lg shadow sm:p-8 bg-[#FFFFFF] dark:border-white mt-[5%] mb-[10%]">
   
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Jaipur</h5>       
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
                        Hawa Mahal 
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
                        Amber Fort 
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
                        City Palace
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
                        Jantar Mantar
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
                        Jaipur City Markets
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
                        Zostel Jaipur
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
                        Hotel Pearl Palace
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
                        The Fern An Ecotel Hotel
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
                        ITC Rajputana, Jaipur
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
                        Hotel Pearl Palace Heritage   
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


  {selectedCity === 'jodhpur' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4  border border-white rounded-lg shadow sm:p-8 bg-[#FFFFFF] dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Jodhpur</h5>       
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
                        Mehrangarh Fort
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
                       Jaswant Thada
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
                        Umaid Bhawan Palace
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
                        Ghanta Ghar (Clock Tower)
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
                        Mandore Gardens
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
                       RAAS Jodhpur
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
                        Ranbanka Palace
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
                        Umaid Bhawan Palace Jodhpur
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
                        Haveli Inn Pal
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
                        Marugarh Resort 
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

  {selectedCity === 'udaipur' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Udaipur</h5>       
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
                        City Palace
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
                        Lake Pichola
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
                        Jag Mandir
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
                        Saheliyon-ki-Bari
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
                        Jagdish Temple
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
                        Taj Lake Palace
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
                        The Oberoi Udaivilas
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
                        The Lalit Laxmi Vilas Palace Udaipur
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
                        Fateh Prakash Palace
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
                        Jagat Niwas Palace Hotel  
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

  {selectedCity === 'pushkar' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Pushkar</h5>       
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
                        Pushkar Lake
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
                        Brahma Temple
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
                        Savitri Temple
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
                        Pushkar Camel Fair
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
                        Pushkar Bazaar
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
                        Pushkar Palace
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
                        Ananta Spa & Resorts
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
                        The Pushkar Bagh
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
                        Hotel Everest Pushkar
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
                        Hotel Master Paradise
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



  {selectedCity === 'jaisalmer' && (
<div className="ayodhya">
<div class="w-full max-w-4xl mx-auto  mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-white mt-[5%] mb-[10%]">
<div className="flex flex-row justify-between">
<div>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-black ">Top Tourism in Jaisalmer</h5>       
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
                        Jaisalmer Fort
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
                        Patwon ki Haveli
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
                        Sam Sand Dunes
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
                        Gadisar Lake
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
                        Desert National Park
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
                        Hotel Golden Fort
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
                        Mystic Jaisalmer
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
                        Joggan Jaisalmer Camp
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
                        Gorbandh Palace
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
                        Mirvana Nature Resort and Camp
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