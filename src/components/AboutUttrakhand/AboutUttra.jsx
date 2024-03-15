import React from 'react'

// location icon
import { IoLocationOutline } from "react-icons/io5";


const AboutUttra = () => {
    function handleClick() {
       
        window.open('https://www.google.com/maps/place/Uttarakhand');
    }
    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>           
            <div className='bg-[#FFFFFF] w-[85%] md:w-[85%]   rounded-xl 
            lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>

                <div className='flex justify-between gap-x-4'>
                    <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl  text-[#504949]' >About Tourism in Uttrakhand</h3>
                       <div className='flex items-center gap-4 xs:gap-6 sm:gap-8 text-[#A21D3C] font-normal'>
                       <div className='flex flex-col items-center justify-center md:bg-[#E5CAD0] md:rounded-xl md:py-2 md:px-4 lg:py-3 lg:px-6  cursor-pointer' onClick={handleClick}>
    <IoLocationOutline className='text-2xl lg:text-3xl'/>
    <p className='text-xs sm:text-sm md:text-base xl:text-xl'>Directions</p>
</div>
                    </div>
                </div>

                {/* description */}
                <div className='my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>
                <p>
Uttarakhand, nestled in the majestic Himalayas, offers a tapestry of natural beauty and cultural heritage. From the sacred pilgrimage sites of Rishikesh and Haridwar to the breathtaking vistas of Nainital and Mussoorie, the state captivates travelers with its diverse attractions. Explore the tranquil lakes and lush forests of Nainital, embark on spiritual journeys along the banks of the holy Ganges in Haridwar, or trek amidst the pristine beauty of the Himalayan ranges in Uttarkashi and Chamoli. With its serene landscapes, ancient temples, and vibrant culture, Uttarakhand promises unforgettable experiences for those seeking adventure, spirituality, and tranquility.
</p>

                    <div className='my-[1rem] lg:my-[2rem]'>
                        <p>Tourist Destinations:</p>
                        <ul className='pl-[2rem] list-disc'>
                            <li>Rishikesh</li>
                            <li>Haridwar</li>
                            <li>Mussoorie</li>
                            <li>Nainital</li>
                            <li>Dehradun</li>
                        </ul>
                    </div>
                   
                </div>

               


            </div>
        </div>
    )
}

export default AboutUttra
