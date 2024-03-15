
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const FilterTravel = () => {
//     const states = [
//         'Goa',
//         'Himachal Pradesh', 'Jharkhand',  'Kerala',
//          'Madhya Pradesh',  'Rajasthan', 
//           'Uttar Pradesh', 'Uttarakhand'
//     ];
//     const [selectedStates, setSelectedStates] = useState([]);

//     const handleStateChange = (state) => {
//         if (selectedStates.includes(state)) {
//             setSelectedStates(selectedStates.filter((selectedState) => selectedState !== state));
//         } else {
//             setSelectedStates([...selectedStates, state]);
//         }
//     };

//     const handleApplyAll = () => {
//         console.log("Selected States:", selectedStates);
//     };

//     return (
//         <div className="flex-grow p-4 ]">
//             <div className='bg-[#F3EFEF] p-6'>
//                 <Link to="" className='flex items-center cursor-pointer'>
//                     <span className='text-[#D66F11] ml-3'>Filter</span>
//                 </Link>
//                 <div className="filter-box ">
//                     <div className="dropdown-content">
//                         {states.map((state, index) => (
//                             <div key={index} className="dropdown-option flex items-center justify-between">
//                                 <span>{state}</span>
//                                 <label className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         checked={selectedStates.includes(state)}
//                                         onChange={() => handleStateChange(state)}
//                                         className="form-checkbox h-4 w-4 text-indigo-600 border-[#D66F11]"
//                                     />
//                                 </label>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <button onClick={handleApplyAll} className="bg-[#D66F11] text-white px-4 py-2 mt-4 rounded-md">Apply All</button>
//             </div>
//         </div>
//     );
// };

// export default FilterTravel;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FilterTravel = () => {
    const states = [
        'Goa',
        'Himachal Pradesh', 'Jharkhand',  'Kerala',
         'Madhya Pradesh',  'Rajasthan', 
          'Uttar Pradesh', 'Uttarakhand'
    ];
    const [selectedStates, setSelectedStates] = useState([]);

    const handleStateChange = (state) => {
        if (selectedStates.includes(state)) {
            setSelectedStates(selectedStates.filter((selectedState) => selectedState !== state));
        } else {
            setSelectedStates([...selectedStates, state]);
        }
    };

    const handleApplyAll = () => {
        // console.log("Selected States:", selectedStates);
        // Redirect to the first selected state
        const firstSelectedState = selectedStates[0];
        if (firstSelectedState) {
            window.location.href = `/${firstSelectedState.toLowerCase().replace(/\s/g, '')}`;
        }
    };

    return (
        <div className="flex-grow p-4">
            <div className='bg-[#F3EFEF] p-6'>
                <Link to="" className='flex items-center cursor-pointer'>
                    <span className='text-[#D66F11] ml-3'>Filter</span>
                </Link>
                <div className="filter-box">
                    <div className="dropdown-content">
                        {states.map((state, index) => (
                            <div key={index} className="dropdown-option flex items-center justify-between">
                                <span>{state}</span>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedStates.includes(state)}
                                        onChange={() => handleStateChange(state)}
                                        className="form-checkbox h-4 w-4 text-indigo-600 border-[#D66F11]"
                                    />
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleApplyAll} className="bg-[#D66F11] text-white px-4 py-2 mt-4 rounded-md">Apply All</button>
            </div>
        </div>
    );
};

export default FilterTravel;
