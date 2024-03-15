import c from '../../assets/images/c.png';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import res from '../../assets/images/res.jpg';
import res1 from '../../assets/images/res1.jpg';
import u1 from '../../assets/images/u1.jpg';
import u2 from '../../assets/images/u2.webp';
import u3 from '../../assets/images/u3.avif';
import u4 from '../../assets/images/u4.jpg';
import u5 from '../../assets/images/u5.jpg';

const Popular = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <div className="text-center mt-[5%]">
        <h2 className="font-bold text-[#121212] md:text-[#2D2D2D] text-base md:text-2xl lg:text-4xl xl:text-5xl mt-2 lg:mt-4 mb-4">
          Must Visit In India
        </h2>
      </div>

      <Slider {...sliderSettings}>
        <div>
                <div className="flex relative">
            {/* <h1 className="absolute top-0 ml-[5%] z-10 text-black text-4xl font-bold p-4 ">
              Ram Mandir
            </h1>           */}
            <div className="relative w-full">
            
              <div className="absolute mt-[3%] top-5 w-1/3 h-1/2 bg-black opacity-50 ml-[5%]">

              </div>
              
              <img
                src={u1}
                alt="Slider Image 1"
                className="w-full h-[30em] object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex">
          <div className="relative w-full">
            
            <div className="absolute mt-[3%] top-5 w-1/3 h-1/2 bg-black opacity-50 ml-[5%]">

            </div>
              <img
                src={u2}
                alt="Slider Image 2"
                className="w-full h-[30em] object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex">
          <div className="relative w-full">
            
            <div className="absolute mt-[3%] top-5 w-1/3 h-1/2 bg-black opacity-50 ml-[5%]">

            </div>
              <img
                src={u3}
                alt="Slider Image 2"
                className="w-full h-[30em] object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex">
          <div className="relative w-full">
            
            <div className="absolute mt-[3%] top-5 w-1/3 h-1/2 bg-black opacity-50 ml-[5%]">

            </div>
              <img
                src={u4}
                alt="Slider Image 2"
                className="w-full h-[30em] object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex">
          <div className="relative w-full">
            
            <div className="absolute mt-[3%] top-5 w-1/3 h-1/2 bg-black opacity-50 ml-[5%]">

            </div>
              <img
                src={u5}
                alt="Slider Image 2"
                className="w-full h-[30em] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Repeat the structure for the remaining slides */}
      </Slider>
    </div>
  );
};

export default Popular;