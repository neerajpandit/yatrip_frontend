import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
    const states = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
        'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
        'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
        'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
        'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
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
        console.log("Selected States:", selectedStates);
        // Handle filter logic directly here
        // For example, you can display the selected states in the console
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

export default Filter;
