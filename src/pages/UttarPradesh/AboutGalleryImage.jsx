import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const AboutGalleryImage = () => {
    const [selectedImage, setSelectedImage] = useState("https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg");

    const handleImageClick = (imageUrl) => {
      setSelectedImage(imageUrl);
    };

    // Define an array of image sources
    const galleryImages = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
    ];

    return (
        <div>
            <div className="relative mb-[10%]">
                <Navbar />
            </div>
            <div class="grid gap-4 ">
                <div class="grid place-items-center ml-[20%]">
                    <div>
                        <img class="h-auto max-w-full rounded-lg w-[70%]"  src={selectedImage}  alt=""/>
                    </div>
                </div>
                <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" class="text-blue-700 hover:text-white border w-[20%] border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All </button>
            </div>
                <div class="grid grid-cols-5 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} onClick={() => handleImageClick(image)}>
                            <img class="h-auto max-w-full rounded-lg" src={image} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default AboutGalleryImage;
