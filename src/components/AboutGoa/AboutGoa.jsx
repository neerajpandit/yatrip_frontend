import React from 'react';

// location icon
import { IoLocationOutline } from "react-icons/io5";
// call icon
import { IoCallOutline } from "react-icons/io5";
// share icon
import { FiShare } from "react-icons/fi";

const AboutGoa = () => {
    function handleClick() {
        // Open the map of Goa
        window.open('https://www.google.com/maps/place/Goa');
    }

    // Array of tourist destinations
    const touristDestinations = [
        "Old Goa",
        "Baga",
        "Calangute",
        "Sanguem",
        "Panaji"
    ];

    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>
            <div className='bg-[#FFFFFF] w-[85%] md:w-[85%] rounded-xl lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>
                <div className='flex justify-between gap-x-4'>
                    <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949]'>About Tourism in Goa</h3>
                    <div className='flex items-center gap-4 xs:gap-6 sm:gap-8 text-[#A21D3C] font-normal'>
                        <div className='flex flex-col items-center justify-center md:bg-[#E5CAD0] md:rounded-xl md:py-2 md:px-4 lg:py-3 lg:px-6  cursor-pointer' onClick={handleClick}>
                            <IoLocationOutline className='text-2xl lg:text-3xl' />
                            <p className='text-xs sm:text-sm md:text-base xl:text-xl'>Directions</p>
                        </div>
                    </div>
                </div>
                {/* description */}
                <div className='my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>
                    <p>
                        Tourism in Goa offers sun-soaked beaches like Baga, Calangute, Anjuna, and Palolem, each with its own vibe. Old Goa showcases Portuguese heritage through landmarks like the Basilica of Bom Jesus. Dudhsagar Falls impresses with its towering beauty, while Fort Aguada provides coastal views. Spice plantations offer aromatic tours, and dolphin cruises navigate serene backwaters. Explore Fontainhas' colorful streets or step into history at Ancestral Goa. Goa's blend of sun, culture, and adventure promises unforgettable experiences for all.
                    </p>
                    <div className='my-[1rem] lg:my-[2rem]'>
                        <p>Tourist Destinations:</p>
                        <ul className='pl-[2rem] list-disc'>
                            {touristDestinations.map((destination, index) => (
                                <li key={index}>{destination}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutGoa;
