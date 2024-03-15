import React, { useState } from 'react';
import backgroundImage from '../../assets/Travel/t.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import { SearchIcon } from '@heroicons/react/outline';


const HeroTravel = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="hero relative overflow-hidden md:h-[35em]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 w-[80%] h-[20%]">
          <h1 class="text-white text-2xl flex justify-center">Search Your Destination</h1>

          <div class="flex mt-8">
            <div class="flex-1 ml-4 mr-4 bg-[#64748b]">
              <input class="w-full h-full bg-transparent border-none focus:outline-none" type="text" placeholder="Search any destination" />
            </div>
            <div className="flex-1 mr-4 bg-[#64748b]  relative h-10 flex justify-center items-center">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Check-in"
                className="w-full h-full bg-transparent border-none focus:outline-none cursor-pointer" // Add cursor-pointer class
              />
              {checkInDate && ( // Render the clear button only if a date is selected
                <button
                  className="absolute top-0 right-0 mt-2 mr-1 text-white flex justify-center items-center"
                  onClick={() => setCheckInDate(null)} // Clear the selected date on click
                >
                  &#x2715; {/* Cross icon */}
                </button>
              )}
            </div>
            <div className="flex-1 mr-4 bg-[#64748b] relative h-10 flex justify-center items-center">
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Check-out"
                className="w-full h-full bg-transparent border-none focus:outline-none cursor-pointer" // Add cursor-pointer class
              />
              {checkOutDate && ( // Render the clear button only if a date is selected
                <button
                  className="absolute top-0 right-0 mt-2 mr-1 text-white flex justify-center items-center"
                  onClick={() => setCheckOutDate(null)} // Clear the selected date on click
                >
                  &#x2715; {/* Cross icon */}
                </button>
              )}
            </div>

            <div className="flex-1 mr-4 bg-[#2563eb]">

              <button class="w-full h-full bg-transparent border-none focus:outline-none">
                <div className="flex items-center justify-center space-x-2"> {/* Flex container with space between items */}
                  <h1 className="">Search</h1> {/* Text */}
                  <SearchIcon className="w-6" /> {/* Search icon */}
                </div>
              </button>
            </div>
            {/* <div class="flex-1 ml-4 mr-4 bg-[#64748b]">
              <button class="w-full h-full bg-transparent border-none focus:outline-none">login/Register</button>
            </div> */}

          </div>


        </div>
      </div>
      <div className="w-full h-full" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
    </div>
  );
};

export default HeroTravel;
