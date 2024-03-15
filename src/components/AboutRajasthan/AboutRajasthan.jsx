import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiShare } from "react-icons/fi";

const AboutRajasthan = () => {
    // Array of social icons with their corresponding functions
    const socialIcons = [
        {
            icon: IoLocationOutline,
            text: "Directions",
            handleClick: () => {
                window.open('https://www.google.com/maps/place/Rajasthan');
            }
        },
        // Add other social icons here with their respective functions
        // Example:
        // {
        //     icon: IoCallOutline,
        //     text: "Call",
        //     handleClick: () => {
        //         // Handle click action for call icon
        //     }
        // },
        // {
        //     icon: FiShare,
        //     text: "Share",
        //     handleClick: () => {
        //         // Handle click action for share icon
        //     }
        // }
    ];

    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>
            <div className='bg-[#FFFFFF] w-[85%] md:w-[85%] rounded-xl lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>
                <div className='flex justify-between gap-x-4'>
                    <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl  text-[#504949]'>About Tourism in Rajasthan</h3>
                    <div className='flex items-center gap-4 xs:gap-6 sm:gap-8 text-[#A21D3C] font-normal'>
                        {/* Map over the socialIcons array */}
                        {socialIcons.map((socialIcon, index) => (
                            <div key={index} className='flex flex-col items-center justify-center md:bg-[#E5CAD0] md:rounded-xl md:py-2 md:px-4 lg:py-3 lg:px-6 cursor-pointer' onClick={socialIcon.handleClick}>
                                <socialIcon.icon className='text-2xl lg:text-3xl' />
                                <p className='text-xs sm:text-sm md:text-base xl:text-xl'>{socialIcon.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* description */}
                <div className='my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>
                    <p>Rajasthan, known for its rich heritage, vibrant culture, and majestic forts, offers a plethora of tourist attractions. From the historic city of Jaipur to the romantic city of Udaipur, Rajasthan is a treasure trove of architectural marvels, traditional arts, and royal experiences.</p>
                    <div className='my-[1rem] lg:my-[2rem]'>
                        <p>Tourist Destinations:</p>
                        <ul className='pl-[2rem] list-disc'>
                            <li>Jaipur</li>
                            <li>Jodhpur</li>
                            <li>Udaipur</li>
                            <li>Jaisalmer</li>
                            <li>Pushkar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutRajasthan;
