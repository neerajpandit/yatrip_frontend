import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const GalleryImage = () => {
    const [selectedImage, setSelectedImage] = useState("https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg");

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    // Array containing image URLs
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

                <div className="grid grid-cols-5 gap-4">
                    {/* Map over the imageUrls array to render each image dynamically */}
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

export default GalleryImage;
