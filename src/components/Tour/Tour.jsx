import React from 'react';
import FilterTravel from '../Filter/FilterTravel';
import TourCard from '../TourCards/TourCard';
import Footer from '../Footer/Footer';

import keral from '../../assets/images/keral.webp';
import t from '../../assets/Travel/t.jpg';
// import madhyaPradesh from '../../assets/images/madhyaPradesh.jpg';
// import himachalPradesh from '../../assets/images/himachalPradesh.jpg';
// import goa from '../../assets/images/goa.jpg';
// import jammuAndKashmir from '../../assets/images/jammuAndKashmir.jpg';
// import rajasthan from '../../assets/images/rajasthan.jpg';
// import uttarakhand from '../../assets/images/uttarakhand.jpg';

const destinations = [
  {
    title: 'Uttar Pradesh',
    description: 'Each hotel in Uttar Pradesh is meticulously designed with modern amenities and plush furnishings, ensuring a relaxing retreat for every guest.',
    image: t,
    link: '/UttarPradesh'
  },
  {
    title: 'Kerala',
    description: 'Discover the beauty of Kerala at your own pace, knowing that a warm welcome and a restful retreat await you at our hotel after each day of adventure.',
    image: t,
    link: '/Kerala'
  },
  {
    title: 'Madhya Pradesh',
    description: 'Create your own itinerary or let us help you plan the ultimate tourism stay, complete with insider tips, exclusive experiences, and a cozy haven to return to after each day of exploration.',
    image: t,
    link: '/MadhyaPradesh'
  },
  {
    title: 'Himachal Pradesh',
    description: 'Savor the freedom to wander and the comfort of knowing you have a welcoming oasis awaiting your return at our hotel, where every aspect of your tourism stay is thoughtfully catered to.',
    image: t,
    link: '/HimachalPradesh'
  },
  {
    title: 'Goa',
    description: 'Indulge your wanderlust and satisfy your curiosity with a tourism stay at our hotel, where luxury accommodations and personalized service combine to create the ultimate travel experience.',
    image: t,
    link: '/Goa'
  },
  {
    title: 'Jammu & Kashmir',
    description: 'With prime locations near top attractions and a range of amenities designed for travelers, our hotel is the perfect base for your tourism stay, allowing you to explore with ease and unwind in style.',
    image: t,
    link: '/Jammu'
  },
  {
    title: 'Rajasthan',
    description: 'Uncover the hidden treasures of Rajasthan during your tourism stay, with our hotel serving as your sanctuary amidst the excitement and wonder of exploration.',
    image: t,
    link: '/Rajasthan'
  },
  {
    title: 'Uttarakhand',
    description: 'Escape the ordinary and embrace the extraordinary during your tourism stay at our hotel, where every moment is a chance to uncover the beauty and charm of Uttarakhand.',
    image: t,
    link: '/Uttrakhand'
  }
];

const Tour = () => {
  // Function to chunk the destinations array into pairs
  const chunkArray = (array, size) => {
    return array.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(array.slice(i, i + size));
      }
      return acc;
    }, []);
  };

  // Chunk the destinations into pairs
  const destinationPairs = chunkArray(destinations, 2);

  return (
    <div>
      <div className="text-center mt-10 bg-[#F3EFEF]">
        <h1 className="text-3xl font-bold mb-8">Hotel</h1>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/4 h-auto mb-4 sm:mb-0">
            <FilterTravel />
          </div>
          <div className="w-full sm:w-3/4 h-auto">
            {destinationPairs.map((pair, index) => (
              <div key={index} className="flex mb-4">
                {pair.map((destination, i) => (
                  <a key={i} href={destination.link} className="flex flex-col items-center mr-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={destination.image} alt={destination.title} />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{destination.title}</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{destination.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          
          </div>
          <TourCard />
           
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Tour;
