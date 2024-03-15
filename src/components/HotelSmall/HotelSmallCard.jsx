import React from 'react'
import r from '../../assets/images/r.jpg';

// heart icon
 import { FaRegHeart } from "react-icons/fa";
// rupee icon
// import { FaRupeeSign } from "react-icons/fa";
 
 import { GoStarFill } from "react-icons/go";

const HotelSmallCard = ({image, place, city}) => {
    return (
        // add drop shadow later box-shadow: 0px 0px 20px 0px #00000014;
        <div className='md:w-[286px] lg:w-[296px] rounded-xl p-[10px] lg:p-[0.8rem] bg-[#FFFFFF] md:shadow-CardBorder'>
        
        {/* here our all content */}
        <div className="w-full h-full flex md:block">
            {/* here will store our image and heart */}
            <div className='w-[100px] h-[100px] xs:w-[150px] xs:h-[110px] md:h-[250px] md:w-[270px] lg:h-[298px] lg:w-[270px] relative'>
                {/* if you find solutin of the image then add shadow-CardImageBorder class */}
                <img src={image} className='w-full h-full' alt="" />

                {/* wishlist icon */}
                {/* <div className='hidden w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#FFFFFF]  md:flex items-center justify-center rounded-[2rem]
                absolute top-5 right-5 shadow-wishlistIcon
                '>
                     <FaRegHeart className='text-xl lg:text-2xl text-[#D66F11]'/> 
                </div> */}
            </div>

            {/* content box */}
            <div className='w-full px-2 relative flex flex-col justify-center md:block'>
                <h2 className='font-SulphurPoint font-bold text-sm xs:text-base md:text-xl lg:text-2xl text-[#504949] md:text-[#A21D3C]'>{place}</h2>
                <h2 className='font-Inter font-normal text-xs xs:text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6rem] xs:leading-[2.2rem] md:leading-[2rem] text-[#AA9E9E] md:text-[#989898]'>{city}</h2>

                {/* state and rating */}
                <div className='flex justify-between'>
                    {/* price */}
                   
                </div>                
            </div>
        </div>
        </div>
    )
}

export default HotelSmallCard
