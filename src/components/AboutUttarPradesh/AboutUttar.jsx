import React from 'react';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';
import { FiShare } from 'react-icons/fi';

const socialIcons = [
    {
        icon: <IoLocationOutline className="text-2xl lg:text-3xl" />,
        label: 'Directions',
        onClick: () => window.open('https://www.google.com/maps/place/Uttar+Pradesh'),
    },
    // Add more social icons as needed
];

const AboutUttar = () => {
    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>
            <div className='bg-[#FFFFFF] w-[85%] md:w-[85%] rounded-xl lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>
                <div className='flex justify-between gap-x-4'>
                    <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949]'>About Tourism in Uttar Pradesh</h3>
                    <div className='flex items-center gap-4 xs:gap-6 sm:gap-8 text-[#A21D3C] font-normal'>
                        {socialIcons.map((socialIcon, index) => (
                            <div key={index} className='flex flex-col items-center justify-center md:bg-[#E5CAD0] md:rounded-xl md:py-2 md:px-4 lg:py-3 lg:px-6 cursor-pointer' onClick={socialIcon.onClick}>
                                {socialIcon.icon}
                                <p className='text-xs sm:text-sm md:text-base xl:text-xl'>{socialIcon.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>
                    <p>
                        Uttar Pradesh, rich in culture and history, offers iconic attractions like the Taj Mahal, spiritual experiences in Varanasi, and the historical charm of Lucknow. From Ayodhya to Mathura, the state promises diverse experiences for travelers seeking pilgrimage, heritage, and culinary delights. With its vibrant tapestry of sights and sounds, Uttar Pradesh invites exploration and discovery at every turn.
                    </p>
                    <div className='my-[1rem] lg:my-[2rem]'>
                        <p>Tourist Destinations:</p>
                        <ul className='pl-[2rem] list-disc'>
                            <li>Agra</li>
                            <li>Varanasi</li>
                            <li>Ayodhya</li>
                            <li>Mathura and Vrindavan</li>
                            <li>Gorakhpur</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUttar;
