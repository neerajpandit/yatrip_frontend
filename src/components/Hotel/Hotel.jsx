import React from 'react';
import r from '../../assets/images/r.jpg';
import { Link } from 'react-router-dom';



import go from '../../assets/images/go.jpg';
import jai from '../../assets/images/jai.jpg';
import ooty from '../../assets/images/ooty.jpg';
import muss from '../../assets/images/muss.jpg';
import rishi from '../../assets/images/rishi.jpg';
import prem from '../../assets/images/prem.avif';
import u2 from '../../assets/images/u2.webp';
import golden from '../../assets/images/golden.jpg';

import mum from '../../assets/images/mum.webp';
import tm from '../../assets/images/tm.webp';
import vara from '../../assets/images/vara.webp';
import delhi from '../../assets/images/delhi.jpg';
import manali from '../../assets/images/manali.jpg';
import meghalya from '../../assets/images/meghalya.jpg';
import pun from '../../assets/images/pun.jpg';
import shimlaa from '../../assets/images/shimlaa.jpg';

const Hotel = () => {
  return (
    <div className='hidden md:block'>
    <h2 className="flex flex-col justify-center mt-[5%] lg:flex-row lg:items-start lg:justify-center font-bold text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D]">Stay Spot at your Destination</h2>    
    <div className='w-full bg-[#FFFFFF] py-[1rem] h-fit'>
    <div className=' w-[85%] md:w-[85%] rounded-xl lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>        
           
    {/* <h4 className='font-SulphurPoint font-normal text-base md:text-2xl lg:text-4xl xl:text-5xl text-[#121212] md:text-[#2D2D2D]'>Stay Happily</h4>
     */}
     </div> 

     <div className=' bg-[#F3EFEF] w-[85%] md:w-[85%] rounded-xl lg:w-[85%] mx-auto font-SulphurPoint p-4 md:p-6 md:max-w-[1000px]'>
        
                <div className="flex items-center gap-x-4 mt-[5%]">
          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={go} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Goa</h3>
            <p>Goa a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={ooty} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Ooty</h3>
            <p>Ooty a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={jai} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Jaipur</h3>
            <p>Jaipur a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={delhi} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Delhi</h3>
            <p>Delhi a beautiful place</p>
          </div>
         
        </div>
        <div className="flex items-center gap-x-4 mt-[5%]">
          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={mum} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Mumbai</h3>
            <p>Mumbai a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={manali} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Manali</h3>
            <p>Manali a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={shimlaa} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Shimla</h3>
            <p>Shimla a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={u2} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Agra</h3>
            <p>Agra a beautiful place</p>
          </div>
         
        </div>


        <div className="flex items-center gap-x-4 mt-[5%]">
          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={rishi} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Rishikesh</h3>
            <p>Rishikesh a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={meghalya} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Meghalaya</h3>
            <p>Meghalaya a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={muss} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Dehradun</h3>
            <p>Dehradun a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={golden} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Amritsar</h3>
            <p>Amritsar a beautiful place</p>
          </div>
         
        </div>


        <div className="flex items-center gap-x-4 mt-[5%]">
          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={prem} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Vrindavan</h3>
            <p>Vrindavan a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={vara} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Varansi</h3>
            <p>Varansi a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={tm} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Tamil Nadu</h3>
            <p>Tamil Nadu a beautiful place</p>
          </div>

          <div className="w-10 h-10 bg-cover rounded-full overflow-hidden mr-4">
            <img src={pun} alt="R" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Punjab</h3>
            <p>Punjab a beautiful place</p>
          </div>         
        </div>
        <Link to="/Travel">
      <button className="border w-full border-[#A21D3C] bg-white text-[#A21D3C] px-4 py-2 rounded font-bold mt-[5%]">
        Read More
      </button>
    </Link>


</div>
      </div>
    </div>
  );
};

export default Hotel;
