import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';


const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
     <div className="bg-white">
     <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className=" rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 sm:w-full lg:w-96" // Adjusted width for larger screens
 />
 <button type="submit" className=" text-black px-4 py-2 rounded">
 <SearchIcon className="h-6 w-6" /> {/* Search icon */}
        </button>
     
     </div>
    </form>
  );
};

export default SearchBox;
