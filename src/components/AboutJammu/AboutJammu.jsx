import React from 'react';

// Import icons
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiShare } from "react-icons/fi";

const AboutJammu = () => {
    // Array containing social icon data
    const socialIcons = [
        {
            icon: <IoLocationOutline className='text-2xl lg:text-3xl' />,
            text: "Directions",
            onClick: () => {
               
                window.open('https://www.google.com/maps/place/Jammu+and+Kashmir');

            }
        },
        // Add more social icons here as needed
    ];

    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>
            <div className='bg-[#FFFFFF] w-[85%] md:w-[85%] rounded-xl lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>
                <div className='flex justify-between gap-x-4'>
                    <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl  text-[#504949]' >About Tourism in Jammu and Kahsmir</h3>
                    {/* Render social icons dynamically */}
                    <div className='flex items-center gap-4 xs:gap-6 sm:gap-8 text-[#A21D3C] font-normal'>
                        {socialIcons.map((icon, index) => (
                            <div key={index} className='flex flex-col items-center justify-center md:bg-[#E5CAD0] md:rounded-xl md:py-2 md:px-4 lg:py-3 lg:px-6 cursor-pointer' onClick={icon.onClick}>
                                {icon.icon}
                                <p className='text-xs sm:text-sm md:text-base xl:text-xl'>{icon.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* description */}
                <div className='my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>
                    <p>
                    Jammu and Kashmir, often hailed as "Paradise on Earth," is a region of unparalleled natural beauty and cultural richness. Nestled in the northernmost part of India, it comprises three distinct areas: the lush Kashmir Valley, the picturesque Jammu region, and the rugged terrain of Ladakh. In the Kashmir Valley, visitors are enchanted by the serene Dal Lake in Srinagar, the floral abundance of Gulmarg, and the tranquility of Pahalgam. The Jammu region boasts the revered Vaishno Devi Temple, the scenic retreat of Patnitop, and the historic temples of Jammu City. Meanwhile, Ladakh captivates with its stark landscapes, ancient monasteries, and pristine lakes like Pangong and Tso Moriri. Whether seeking spiritual solace, thrilling adventures, or simply breathtaking vistas, 
                    Jammu and Kashmir offer an unforgettable journey into the heart of nature and culture. </p>

                    <div className='my-[1rem] lg:my-[2rem]'>
                        <p>Tourist Destinations:</p>
                        <ul className='pl-[2rem] list-disc'>
                            <li>Srinagar</li>
                            <li>Leh</li>
                            <li>Jammu City</li>
                            <li>Gulmarg</li>
                            <li>Pahalgam</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutJammu;
