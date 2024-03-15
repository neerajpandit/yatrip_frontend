import React from 'react'

const WildPick = ({image, name, city, state}) => {
    return (
        <div className='w-[286px] lg:w-[296px] rounded-xl p-[10px] lg:p-[0.8rem] bg-[#FFFFFF] shadow-CardBorder'>
        <div className="w-full h-full">
            <div className='h-[250px] w-[270px] lg:h-[298px] lg:w-[270px] relative'>
                <img src={image} className='w-full h-full' alt="" />
            </div>
 <div className=' w-full px-2'>
                <h2 className='font-SulphurPoint font-bold text-xl lg:text-2xl text-[#A21D3C]'>{name}</h2>
                 <div className='flex justify-between'>
                  
                    <div className='flex items-center'>
                       
                    <h2 className='font-Inter font-normal text-xl lg:text-xl'>{city}</h2>
                    </div>

                    {/* rating */}
                    <div className='flex items-center gap-x-3'>
                        <h2 className='font-Inter font-normal text-xl lg:text-xl'>{state}</h2>
                    </div>
                </div>


                
            </div>
        </div>
        </div>
    )
}

export default WildPick
