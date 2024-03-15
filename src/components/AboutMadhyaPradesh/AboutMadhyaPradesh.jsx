import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiShare } from "react-icons/fi";

const AboutMadhyaPradesh = () => {
    const socialIcons = [
        { icon: <IoLocationOutline className='text-2xl lg:text-3xl' />, text: 'Directions', url: 'https://www.google.com/maps/place/Madhya+Pradesh' },
        // Add more social icons here as needed
    ];

    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>
            <div className='bg-[#FFFFFF] w-[85%] md:w-[85%] rounded-xl lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>
                <div className='flex justify-between gap-x-4'>
                    <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949]'>About Tourism in Madhya Pradesh</h3>
                    <div className='flex items-center gap-4 xs:gap-6 sm:gap-8 text-[#A21D3C] font-normal'>
                        {/* Mapping over socialIcons array to render each social icon */}
                        {socialIcons.map((socialIcon, index) => (
                            <div key={index} className='flex flex-col items-center justify-center md:bg-[#E5CAD0] md:rounded-xl md:py-2 md:px-4 lg:py-3 lg:px-6 cursor-pointer' onClick={() => window.open(socialIcon.url)}>
                                {socialIcon.icon}
                                <p className='text-xs sm:text-sm md:text-base xl:text-xl'>{socialIcon.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* description */}
                <div className='my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>
                <p>
    Madhya Pradesh, known for its rich heritage and diverse landscapes, beckons travelers with its myriad attractions. From the architectural marvels of Khajuraho to the wildlife sanctuaries of Bandhavgarh and Kanha, the state offers a tapestry of experiences. Explore the ancient caves of Bhimbetka, delve into the spiritual ambiance of Ujjain, or immerse yourself in the historical grandeur of Gwalior Fort. With its blend of history, culture, and natural beauty, Madhya Pradesh promises unforgettable journeys for every explorer.
</p>

                    <div className='my-[1rem] lg:my-[2rem]'>
                        <p>Tourist Destinations:</p>
                        <ul className='pl-[2rem] list-disc'>
                            <li>Bhopal</li>
                            <li>Indore</li>
                            <li>Gwalior</li>
                            <li>Khajuraho</li>
                            <li>Ujjain</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMadhyaPradesh;
