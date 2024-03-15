import React from 'react'

// location icon
import { IoLocationOutline } from "react-icons/io5";

const AboutHimachal = () => {
    function handleClick() {
        // Open the map of Himachal Pradesh
        window.open('https://www.google.com/maps/place/Himachal+Pradesh');
    }

    // Array of tourist destinations
    const touristDestinations = [
        "Shimla",
        "Manali",
        "Dharamshala",
        "Kullu",
        "Chamba"
    ];

    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>           
            <div className='bg-[#FFFFFF] w-[85%] md:w-[85%] rounded-xl lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>

                <div className='flex justify-between gap-x-4'>
                    <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949]'>
                        About Tourism in Himachal Pradesh
                    </h3>
                    <div className='flex items-center gap-4 xs:gap-6 sm:gap-8 text-[#A21D3C] font-normal'>
                        <div className='flex flex-col items-center justify-center md:bg-[#E5CAD0] md:rounded-xl md:py-2 md:px-4 lg:py-3 lg:px-6 cursor-pointer' onClick={handleClick}>
                            <IoLocationOutline className='text-2xl lg:text-3xl'/>
                            <p className='text-xs sm:text-sm md:text-base xl:text-xl'>Directions</p>
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className='my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>
                    <p>
                        Himachal Pradesh is a paradise for nature lovers and adventure seekers alike. With its breathtaking landscapes of snow-capped mountains, lush valleys, meandering rivers, and dense forests, the state offers a visual feast for visitors. Adventure activities such as trekking, paragliding, river rafting, and skiing abound in places like Solang Valley, Rohtang Pass, and Spiti Valley. Beyond adventure, Himachal Pradesh boasts a rich cultural heritage, with numerous temples, monasteries, and spiritual retreats dotting its terrain. Shimla, the colonial summer capital, still retains its Victorian charm with architectural marvels like the Viceregal Lodge and Christ Church. The state's festivals, including Dussehra in Kullu and Losar in Lahaul-Spiti, showcase its diverse cultural tapestry.
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

                {/* social icons */}
                {/* <div>

                </div> */}
            </div>
        </div>
    )
}

export default AboutHimachal;
