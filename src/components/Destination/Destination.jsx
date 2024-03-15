import React from 'react';
import SmallNavbar from '../../components/SmallNavbar/SmallNavbar';
import wl from '../../assets/images/wl.jpg';
import c from '../../assets/images/c.jpeg';
import sp from '../../assets/images/sp.jpg';
import ad from '../../assets/images/ad.jpg';
import na from '../../assets/images/na.jpg';
import pp from '../../assets/images/pp.webp';
import cl from '../../assets/images/cl.webp';

const Destination = () => {
  // Define an array of image URLs
  const imageUrls = [sp, ad, pp, na, wl, cl];

  // Function to chunk the array into groups of size n
  const chunkArray = (arr, n) => {
    return Array(Math.ceil(arr.length / n))
      .fill()
      .map((_, i) => arr.slice(i * n, i * n + n));
  };

  // Chunk the image URLs into groups of 3
  const imageChunks = chunkArray(imageUrls, 3);

  return (
    <div>
      <div className="mt-8"> 
        <SmallNavbar/>
      </div>

      {/* Render image cards */}
      {imageChunks.map((chunk, rowIndex) => (
        <div key={rowIndex} className="flex flex-col md:flex-row justify-around mt-[3%]">
          {chunk.map((imageUrl, index) => (
            <div key={index} className="card relative w-full md:w-[30%] md:ml-10 mb-5 md:mb-0 hover:shadow-lg transition duration-500 ease-in-out hover:shadow-black">
              <img src={imageUrl} alt={`Image ${index}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-xl font-bold">{getTitle(rowIndex, index)}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 text-center md:p-2 sm:p-1">
                <a href={`/${getTitle(rowIndex, index)}`} className="text-white">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Function to get the title based on the row index and card index
const getTitle = (rowIndex, cardIndex) => {
  const index = rowIndex * 3 + cardIndex;
  switch (index) {
    case 0:
      return 'Spiritual';
    case 1:
      return 'Adventure';
    case 2:
      return 'Popular Destination';
    case 3:
      return 'Nature';
    case 4:
      return 'Wild Life';
    case 5:
      return 'Cultural';
    default:
      return '';
  }
}

export default Destination;
