import React from 'react'

import r from '../../assets/images/r.jpg';

const TeamCard = ({image , name,about}) => {
    return (
        <div className='md:w-[440px] md:h-[280px] lg:w-[400px] xl:w-[420px] lg:h-[346px]s bg-[#FFFFFF] md:bg-[#F9F9F9] md:rounded-[36px] relative md:m-[6rem] lg:m-[6rem] lg:mx-[2.2rem] md:p-[2rem]'>
        {/* image box */}
        <div className='flex items-center md:block w-[95%] xs:w-[90%] md:w-[150px]  mx-auto md:h-[125px] lg:w-[190px]s lg:h-[160px]s md:absolute top-[-15%] left-[-8%]'>
            <img src={image} className='w-[44px] h-[44px] xs:w-[60px] xs:h-[60px] sm:h-[70px] sm:w-[70px] md:w-full md:h-full rounded-[50%] md:rounded-[73px] shadow-ReviewImageSmall sm:shadow-ReviewImage
            border border-solid border-1 border-t-1 border-r-4 border-b-4 border-l-1 border-[#898989]
            ' alt="" />
           
        </div>
        {/* here is content */}
        <div className='h-full w-full'> 
            <div className='hidden md:flex pl-[9rem]'>
            <div className='text-center'>
                <p className='font-OpenSans text-[#1D1D1F] text-2xl lg:text-[28px]s'>{name}</p>
                <div className=' flex justify-centers items-center gap-x-2'>
                    {/* starts */}
                    <div className='flex gap-x-1'>
                   </div>                   
                </div>
            </div>
            </div>


            {/* discription */}
            <div className='w-[95%] xs:w-[90%] mx-auto md:w-fit md:mx-[1rem] my-[1rem] md:my-[1rem]'>
                <p className='font-SulphurPoint md:font-Inter font-normal text-sm md:text-lg slg:text-2xl text-[#2D2D2D]'>{about}</p>
            </div>
            
           
        </div>
        </div>
    )
}

export default TeamCard
