// import React from 'react';
// import { register } from "swiper/element/bundle";
// import { useEffect, useRef } from "react";
// import axios from 'axios';
// import TeamCard from './TeamCard';
// register();

// import r from '../../assets/images/r.jpg';
// const API='https://yatripbackend.onrender.com/teacher/'

// const Team = () => {
//     // Define an array of objects containing information about team members
//     const teamMembers = [
//         { image: r, name: 'Sadik Khan', about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
//         { image: r, name: 'Priyanka Pandey', about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
//         // Add more team members as needed
//     ];
//     const getTeacher=async(url)=>{
//         const res=await axios.get(url);
//         console.log(res);

//     };


//     useEffect(()=>{
//         getTeacher(API);

//     },[]);

//     return (
//         <div className='bg-[#FFFFFF] md:bg-transparent w-[85%] md:h-[593px] mx-auto my-8 max-w-[1050px]'>
//             <div className='justify-between items-center py-2 xl:py-3'>
//                 {/* heading */}
//                 <h4 className='font-SulphurPoint font-normal text-base md:text-2xl lg:text-4xl xl:text-[40px] text-[#121212] md:text-[#2D2D2D]'>Mentor</h4>
//                 {/* view all option */}
//             </div>
//             <div className="flex">
//                 {/* Map over the array to render TeamCard components dynamically */}
//                 {teamMembers.map((member, index) => (
//                     <div key={index}>
//                         <TeamCard image={member.image} name={member.name} about={member.about} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Team;

import { useState, useEffect } from 'react';
import { register } from "swiper/element/bundle";
import axios from 'axios';
import TeamCard from './TeamCard';
import r from '../../assets/images/r.jpg';

register();

const API = 'https://yatripbackend.onrender.com/teacher/';

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const getTeacher = async (url) => {
        try {
            const res = await axios.get(url);
            setTeamMembers(res.data); 
        } catch (error) {
            console.error("Error fetching team members:", error);
        }
    };

    useEffect(() => {
        getTeacher(API);
    }, []);

    return (
        <div className='bg-[#FFFFFF] md:bg-transparent w-[85%] md:h-[593px] mx-auto my-8 max-w-[1050px]'>
            <div className='justify-between items-center py-2 xl:py-3'>
                {/* heading */}
                <h4 className='font-SulphurPoint font-normal text-base md:text-2xl lg:text-4xl xl:text-[40px] text-[#121212] md:text-[#2D2D2D]'>Mentor</h4>
                {/* view all option */}
            </div>
            <div className="flex">
                {/* Map over the array of fetched team members to render TeamCard components dynamically */}
                {teamMembers.map((member, index) => (
                    <div key={index}>
                        <TeamCard image={r} name={member.name} about={member.role} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team;
