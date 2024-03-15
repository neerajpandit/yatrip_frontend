import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaImage } from 'react-icons/fa6';
import { LiaBrushSolid } from 'react-icons/lia';
import { AiFillAppstore } from 'react-icons/ai';
import t from '../../assets/Travel/t.jpg';
import { GoStarFill } from 'react-icons/go';

const navLinks = [
    {
        to: '/UttarPradeshOverview',
        icon: <AiFillAppstore className="text-2xl lg:text-[28px]" />,
        label: 'Overview',
    },
    {
        to: '/UttarPradeshCities',
        icon: <LiaBrushSolid className="text-2xl lg:text-3xl" />,
        label: 'Cities',
    },
    {
        to: '/UttarPradeshGallery',
        icon: <FaImage className="text-2xl lg:text-[26px]" />,
        label: 'Gallery',
    },
];

const Uttar = () => {
    return (
        <div className="mt-[5%]">
            <div className="w-full bg-[#F3EFEF] py-[1rem] min-h-[19rem] lg:min-h-[21rem] xl:min-h-[25rem] h-full ">
                <div className="relative w-[85%] md:w-[85%] lg:w-[85%] max-w-[390px] mx-auto md:flex md:max-w-[1000px]">
                    <div className="md:bg-[#FFFFFF] rounded-xl md:shadow-ArtistBackgroundBox md:absolute left-0 right-0 md:h-[150px] lg:h-[180px] xl:h-[200px]">
                        <div className="md:flex gap-4 xl:gap-6 md:pl-[10px] md:pt-[10px] lg:pl-[1rem] lg:pt-[1rem]">
                            <div className="relative">
                                <img
                                    className="w-fit h-fit md:w-[240px] lg:w-[290px] xl:w-[342px] xl:h-[310px] rounded-[12px]"
                                    src={t}
                                    alt=""
                                />
                            </div>
                            <div className="grow bg-transparent md:flex flex-col justify-between my-1 md:my-0 rounded-[12px] font-SulphurPoint">
                                <div className="my-2 md:my-0 bg-[#FFFFFF] rounded-xl">
                                    <div className="flex md:flex-col justify-between items-center md:items-start p-2 md:p-1">
                                        <h4 className="font-bold text-[#2D2D2D] md:text-[#A21D3C] text-xl md:text-2xl lg:text-3xl xl:text-4xl">Uttar Pradesh</h4>
                                        <div className="hidden md:flex items-center gap-2 lg:my-1 ">
                                            <div className="flex items-center mt-[15%]">
                                                <GoStarFill className="text-base xl:text-xl text-[#F6BB35] " />
                                                <GoStarFill className="text-base xl:text-xl text-[#F6BB35] " />
                                                <GoStarFill className="text-base xl:text-xl text-[#F6BB35] " />
                                                <GoStarFill className="text-base xl:text-xl text-[#F6BB35] " />
                                                <GoStarFill className="text-base xl:text-xl text-[#F6BB35] " />
                                            </div>
                                            <p className="font-Inter font-normal text-base mt-[15%] xl:text-lg text-[#000000]">5.0</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#FFFFFF] md:bg-[#F3EFEF] rounded-[12px] overflow-hidden flex justify-between items-center md:gap-4">
                                    {navLinks.map((link, index) => (
                                        <NavLink
                                            key={index}
                                            to={link.to}
                                            end
                                            className={({ isActive }) =>
                                                `${isActive ? 'text-[#D66F11]' : 'text-[#989898]' } flex flex-col p-2 rounded-xl bg-[#FFFFFF] items-center w-full justify-center md:shadow-ArtistDetailsCard cursor-pointer xl:h-[80px] text-4xl font-semibold`
                                            }
                                        >
                                            {link.icon}
                                            <p className="font-DMSans text-base lg:text-lg xl:text-xl">{link.label}</p>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uttar;
