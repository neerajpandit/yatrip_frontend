import React from 'react'

// location icon
import { IoLocationOutline } from "react-icons/io5";
//call icon
import { IoCallOutline } from "react-icons/io5";
//share icon
import { FiShare } from "react-icons/fi";


//// add social icon for website view

const Aboutt = () => {
   
    return (
        <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit'>           
            <div className='bg-[#FFFFFF] w-[85%] md:w-[85%]   rounded-xl 
            lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>

                <div className='flex justify-between gap-x-4'>
                    <h3 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl  text-[#504949]' >Welcome to Indian Tourism</h3>
                       <div className='flex items-center gap-4 xs:gap-6 sm:gap-8 text-[#A21D3C] font-normal'>
                   </div>
                </div>

                {/* description */}
                <div className='my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]'>
                <p>
Welcome to Indian Tourism, where adventure awaits at every turn and memories are waiting to be made. Whether you're seeking stunning natural landscapes, vibrant cultural experiences, or simply a relaxing getaway, Indian Tourism has something for everyone.</p>
                   



                    <div className='my-[1rem] lg:my-[2rem]'>
                        {/* <p>Tourist Destinations:</p>
                        <ul className='pl-[2rem] list-disc'>
                            <li>Old Goa</li>
                            <li>Baga</li>
                            <li>Calangute</li>
                            <li>Sanguem</li>
                            <li>Panaji</li>
                        </ul> */}
                        Explore the Best Destination Places
Discover the hidden gems and must-see attractions that make Indian Tourism unforgettable. From ancient landmarks to breathtaking vistas, our destination offers a wealth of experiences to explore and enjoy. Whether you're drawn to the bustling streets of the city or the tranquility of the countryside, Indian Tourism promises adventure at every corner.
                    </div>
                   
                </div>

               


            </div>
        </div>
    )
}

export default Aboutt
