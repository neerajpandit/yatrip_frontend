import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaImage } from "react-icons/fa6";
import { LiaBrushSolid } from "react-icons/lia";
import { AiFillAppstore } from "react-icons/ai";
import t from '../../assets/Travel/t.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";

const Kashmir = () => {
    // Array containing NavLink data
    const navLinks = [
        {
            to: "/JammuOverview",
            icon: <AiFillAppstore className='text-2xl lg:text-[28px]' />,
            text: "Overview"
        },
        {
            to: "/JammuCities",
            icon: <LiaBrushSolid className='text-2xl lg:text-3xl' />,
            text: "Cities"
        },
        {
            to: "/JammuGallery",
            icon: <FaImage className='text-2xl lg:text-[26px]' />,
            text: "Gallery"
        }
    ];

    return (
        <div className="mt-[5%]">
            <div className='w-full bg-[#F3EFEF] py-[1rem] min-h-[19rem] lg:min-h-[21rem] xl:min-h-[25rem] h-full '>
                <div className='relative w-[85%] md:w-[85%] lg:w-[85%] max-w-[390px] mx-auto md:flex md:max-w-[1000px]'>
                    <div className='md:bg-[#FFFFFF] rounded-xl md:shadow-ArtistBackgroundBox md:absolute left-0 right-0 md:h-[150px] lg:h-[180px] xl:h-[200px]'>
                        <div className='md:flex gap-4 xl:gap-6 md:pl-[10px] md:pt-[10px] lg:pl-[1rem] lg:pt-[1rem]'>
                            <div className='relative'>
                                <img className='w-fit h-fit md:w-[240px] lg:w-[290px] xl:w-[342px] xl:h-[310px] rounded-[12px]' src={t} alt="" />
                                {/* <div className='hidden absolute top-2 right-2 shadow-wishlistIcon w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#FFFFFF] rounded-[2rem] md:flex justify-center items-center'>
                                    <FaRegHeart className='text-2xl xl:text-3xl text-[#D66F11]' />
                                </div> */}
                            </div>
                            <div className='grow bg-transparent md:flex flex-col justify-between my-1 md:my-0 rounded-[12px] font-SulphurPoint'>
                                <div className='my-2 md:my-0 bg-[#FFFFFF] rounded-xl'>
                                    <div className='flex md:flex-col justify-between items-center md:items-start p-2 md:p-1'>
                                        <h4 className='font-bold text-[#2D2D2D] md:text-[#A21D3C] text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Jammu and Kashmir</h4>
                                        {/* <FaRegHeart className='text-2xl text-[#D66F11] md:hidden' /> */}
                                        <div className='hidden md:flex items-center gap-2 lg:my-1 '>
                                            <div className='flex items-center mt-[15%]'>
                                                <GoStarFill className='text-base xl:text-xl text-[#F6BB35] ' />
                                                <GoStarFill className='text-base xl:text-xl text-[#F6BB35] ' />
                                                <GoStarFill className='text-base xl:text-xl text-[#F6BB35] ' />
                                                <GoStarFill className='text-base xl:text-xl text-[#F6BB35] ' />
                                                <GoStarFill className='text-base xl:text-xl text-[#F6BB35] ' />
                                            </div>
                                            <p className='font-Inter font-normal text-base mt-[15%] xl:text-lg text-[#000000]'>5.0</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center p-2 pr-0 md:p-1 md:pr-1'>
                                        <div className='flex items-center gap-2 md:hidden p-1 px-2 bg-[#F5F5F5]'>
                                            <GoStarFill className='text-xl text-[#F6BB35] ' />
                                            <p className='font-Inter font-normal text-[15px] text-[#000000]'>5.0</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FFFFFF] md:bg-[#F3EFEF] rounded-[12px] overflow-hidden flex justify-between items-center md:gap-4'>
                                    {navLinks.map((link, index) => (
                                        <NavLink
                                            key={index}
                                            to={link.to}
                                            end
                                            className={({ isActive }) =>
                                                `${isActive ? 'text-[#D66F11]': 'text-[#989898]' } flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                                            }
                                        >
                                            {link.icon}
                                            <p className='font-DMSans text-base lg:text-lg xl:text-xl'>{link.text}</p>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kashmir;
