import React from 'react'
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
register();

// import { FaChevronRight } from "react-icons/fa";
import r from '../../assets/images/r.jpg';
import nubra from '../../assets/images/nubra.jpeg';
import u2 from '../../assets/images/u2.webp';
import rishi from '../../assets/images/rishi.jpg';
import ooty from '../../assets/images/ooty.jpg';
import shill from '../../assets/images/shill.jpg';
import muss from '../../assets/images/muss.jpg';
import golden from '../../assets/images/golden.jpg';
import prem from '../../assets/images/prem.avif';


import BestPlaceCard from './BestPlaceCard';
import { Link } from 'react-router-dom';

const BestPlace = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
            const params = {
            navigation: true,
            breakpoints : {
                100: {
                    slidesPerView : 1,
                },
                768:{
                    slidesPerView: 2,
                },
                1150 : {
                slidesPerView: 3,
                }

            },

            injectStyles: [
                `
                .swiper-button-next,
                .swiper-button-prev {
                    position: absolute;
                    top: 95%;
                    width: 15px;
                    height : 15px;
                    padding: 15px;
                    background-color: #F8E3E3;
                    border-radius: 100%;
                    color: #A21D3C;
                }
                .swiper-button-next{
                    right : 40%;
                }
                .swiper-button-prev{
                    left : 40%;
                }
                
                .swiper-pagination-progressbar{
                    background: #A21D3C33;

                }
                .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{
                    
                    background: #A21D3C;
                }

                @media screen and (max-width: 768px) {

                    .swiper-pagination-progressbar{
                        margin-left: 0rem;
    
                    }
                    .swiper-button-next,
                    .swiper-button-prev {
                        top: 95%;
                        width: 4px;
                        height : 4px;
                        padding: 10px;
                    }
                    .swiper-button-next{
                        right : 38%;
                    }
                    .swiper-button-prev{
                        left : 38%;
                    }
                }
            `,
            ],
            };
        
            Object.assign(swiperContainer, params);
            swiperContainer.initialize();
        }, []);

    return (
        <div className='block w-[90%] sm:w-[85%] lg:w-[80%] h-[16rem] md:h-[693px] mx-auto my-8 '>
            <div className='flex justify-between items-center md:py-2 xl:py-3'>

            {/* heading */}
            <h4 className='font-SulphurPoint font-normal text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D]'>Must Visit Destinations</h4>

            {/* view all option */}
            <div className='text-[#A21D3C] flex items-center gap-1'>
                <a href="/"><p className='font-SulphurPoint font-normal text-lg lg:text-[24px] xl:text-[28px] text-[#A21D3C]'>View all</p></a>
                {/* <FaChevronRight className='w-3 h-3 lg:w-[18px] lg:h-[18px] text-[#A21D3C]' /> */}
            </div>
            </div>
        <swiper-container ref={swiperRef} pagination= 'true' pagination-type='progressbar' init="false" 
        class= 'h-[210px] md:h-[530px] lg:h-[570px]'
        
        > 
            {/* first */}
            <swiper-slide class="h-[10rem] my-[1.5rem] md:h-[28rem] md:my-[2.5rem]">
            <Link to='/'> {/* Update the link to the desired URL */}
            <BestPlaceCard image={nubra} place='Nubra Valley' city='Ladakh' state='Jammu & Kashmir' rating='5.0' />
          </Link>
          </swiper-slide>

            {/* second */}
            <swiper-slide class="h-[10rem] my-[1.5rem] md:h-[28rem] md:my-[2.5rem]">
            <Link to='/'>
            <BestPlaceCard image={u2} place='Taj Mahal' city='Agra'  state='Uttar Pradesh' rating='5.0'/>
                </Link>
            </swiper-slide>

            {/* third */}
            <swiper-slide class="h-[10rem] my-[1.5rem] md:h-[28rem] md:my-[2.5rem]">
            <Link to='/'>
            <BestPlaceCard image={rishi} place='Rishikesh' city='Dehradun' state='Uttrakhand' rating='5.0'/>
                </Link>
            </swiper-slide>

            {/* repeat them */}

            <swiper-slide class="h-[10rem] my-[1.5rem] md:h-[28rem] md:my-[2.5rem]">
            <Link to='/'>
            <BestPlaceCard image={ooty} place='Ooty' city='Nilgiris' state='Tamil Nadu'  rating='5.0'/>
                </Link>
            </swiper-slide>

            {/* second */}
            <swiper-slide class="h-[10rem] my-[1.5rem] md:h-[28rem] md:my-[2.5rem]">
            <Link to='/'>
               <BestPlaceCard image={shill} place='Shillong' city='Meghalaya' state='Meghalaya' rating='5.0'/>
                </Link>
            </swiper-slide>

            {/* third */}
            <swiper-slide class="h-[10rem] my-[1.5rem] md:h-[28rem] md:my-[2.5rem]">
            <Link to='/'>
            <BestPlaceCard image={muss} place='Mussoorie' city='Dehradun' state='Uttrakhand' rating='5.0'/>
                </Link>
            </swiper-slide>

          

            <swiper-slide class="h-[10rem] my-[1.5rem] md:h-[28rem] md:my-[2.5rem]">
            <Link to='/'>
            <BestPlaceCard image={golden} place='Golden Temple' city='Amritsar' state='Punjab' rating='5.0'/>
                </Link>
            </swiper-slide>

            <swiper-slide class="h-[10rem] my-[1.5rem] md:h-[28rem] md:my-[2.5rem]">
            <Link to='/'>
            <BestPlaceCard image={prem} place='Prem Mandir' city='Vrindavan' state='Uttar Pradesh' rating='5.0'/>
                </Link>
            </swiper-slide>
            
            
        </swiper-container>
        </div>
    )
    
}

export default BestPlace
