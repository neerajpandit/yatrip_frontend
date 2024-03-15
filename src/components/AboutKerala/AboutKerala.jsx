import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

const socialIcons = [
    {
        icon: <IoLocationOutline className="text-2xl lg:text-3xl" />,
        label: 'Directions',
        onClick: () => window.open('https://www.google.com/maps/place/Kerala'),
    },
    // Add more social icons as needed
];

const AboutKerala = () => {
    const touristDestinations = [
        "Kochi (Cochin)",
        "Thiruvananthapuram (Trivandrum)",
        "Alappuzha (Alleppey)",
        "Munnar",
        "Kozhikode (Calicut)"
    ];

    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>           
            <div className='bg-[#FFFFFF] w-[85%] md:w-[85%] rounded-xl lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>
                <div className='flex justify-between gap-x-4'>
                    <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949]'>About Tourism in Kerala</h3>
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
                        Kerala, often called "God's Own Country," is a captivating state in southern India renowned for its backwaters, beaches, hill stations, wildlife sanctuaries, and rich cultural heritage. Visitors can cruise the tranquil backwaters of Alleppey and Kumarakom on luxurious houseboats, relax on the golden sands of Kovalam and Varkala beaches, and explore the mist-covered hills of Munnar and Wayanad. Wildlife enthusiasts can spot elephants and tigers in Periyar and Wayanad wildlife sanctuaries, while cultural aficionados can immerse themselves in traditional dance forms, Ayurvedic treatments, and vibrant festivals. Kerala's cuisine, with its emphasis on coconut, spices, and seafood, is a culinary delight, and visitors can also explore tea, coffee, and spice plantations. Adventure activities such as trekking, rafting, and water sports add to the state's allure, making Kerala an enchanting destination for travelers seeking diverse experiences in a picturesque setting.
                    </p>
                    <div className='my-[1rem] lg:my-[2rem]'>
                        <p>Tourist Destinations:</p>
                        <ul className='pl-[2rem] list-disc'>
                            {/* Map over the tourist destinations array and render each destination */}
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

export default AboutKerala;
