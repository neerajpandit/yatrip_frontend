import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const AboutImage = () => {
    const [selectedImage, setSelectedImage] = useState("https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg");

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    // Array of image URLs
    const imageUrls = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
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

            <div className="grid gap-4">
                <div className="grid place-items-center ml-[20%]">
                    <div>
                        <img className="h-auto max-w-full rounded-lg w-[70%]" src={selectedImage} alt="" />
                    </div>
                </div>
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" className="text-blue-700 hover:text-white border w-[20%] border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All</button>
            </div>

                <div className="grid grid-cols-5 gap-4">
                    {/* Mapping over image URLs to render each image dynamically */}
                    {imageUrls.map((imageUrl, index) => (
                        <div key={index} onClick={() => handleImageClick(imageUrl)}>
                            <img className="h-auto max-w-full rounded-lg" src={imageUrl} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutImage;
