import React from 'react'
import r from '../../assets/images/r.jpg';

// heart icon
 import { FaRegHeart } from "react-icons/fa";
// rupee icon
// import { FaRupeeSign } from "react-icons/fa";
 
 import { GoStarFill } from "react-icons/go";

const TourCardPicks = ({image, name}) => {
    return (
        // add drop shadow later box-shadow: 0px 0px 20px 0px #00000014;
        <div className='md:w-[286px] lg:w-[296px] rounded-xl p-[10px] lg:p-[0.8rem] bg-[#FFFFFF] md:shadow-CardBorder'>
        
        {/* here our all content */}
        <div className="w-full h-full flex md:block">
            {/* here will store our image and heart */}
            <div className='w-[100px] h-[100px] xs:w-[150px] xs:h-[110px] md:h-[250px] md:w-[270px] lg:h-[298px] lg:w-[270px] relative'>
               <img src={image} className='w-full h-full' alt="" />
            </div>

            {/* content box */}
            <div className='w-full px-2 relative flex flex-col justify-center md:block mt-5'>
                <h2 className='font-SulphurPoint font-bold text-sm xs:text-base md:text-xl lg:text-2xl text-[#504949] md:text-[#A21D3C]'>{name}</h2>
               
                        
            </div>
        </div>
        </div>
    )
}

export default TourCardPicks
