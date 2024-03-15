import React from 'react';

const SmallNavbar = () => {
  return (
    <div className="mx-auto w-full sm:w-3/4 md:w-2/4 bg-gray-100 shadow-lg text-black p-4">
      {/* Use responsive width classes: w-full on small screens, w-1/2 on medium screens, and w-1/3 on large screens */}
      <nav>
        <ul className="flex flex-wrap justify-center space-x-4">
          {/* Use flex-wrap for wrapping links to the next row */}
          <li>
            <a href="/Spiritual" className="hover:bg-black hover:text-white p-2 rounded">
              Spirituals
            </a>
          </li>
          <li>
            <a href="/Adventure" className="hover:bg-black hover:text-white p-2 rounded">
              Adventure
            </a>
          </li>
          <li>
            <a href="/PopularDestination" className="hover:bg-black hover:text-white p-2 rounded">
              Popular Destination
            </a>
          </li>
          <li>
            <a href="/Nature" className="hover:bg-black hover:text-white p-2 rounded">
              Nature
            </a>
          </li>
          <li>
            <a href="/WildLife" className="hover:bg-black hover:text-white p-2 rounded">
              Wild Life
            </a>
          </li>
          <li>
            <a href="/Cultural" className="hover:bg-black hover:text-white p-2 rounded">
              Cultural
            </a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default SmallNavbar;
