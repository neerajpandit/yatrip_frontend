import React, { useState, useRef ,useEffect } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/solid';
import SearchBox from '../../components/SearchBox/SearchBox';
import b from '../../assets/images/b.mp4';
import axios from 'axios';


const API = 'https://yatripbackend.onrender.com/upload-video/';



const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const[videos,setVideos]= useState([]);
  const getVideo = async (url) =>{
    try{
      const res =await axios.get(url);
      setVideos(res.data);
    }catch(error){
      console.log("Error fetchingin video data", error);
    }
  }

  useEffect(() => {
    getVideo(API);
}, []);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const videoSources = [
    { src: b, type: 'video/mp4' }
    // Add more video sources if needed
  ];

  const renderVideoSources = () => {
    return videos.map((source, index) => (      
      <source key={index} src={source.video_url} type={source.type} />
    ));
  };

  return (
    <div className="hero relative overflow-y-hidden md:h-[35em]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="hero-video"
        onClick={togglePlayPause}
      >
        {renderVideoSources()}
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SearchBox />
      </div>

      <div className="absolute bottom-4 left-4">
        <button
          className="play-pause-button focus:outline-none text-red-500"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <PauseIcon className="w-6 h-6" />
          ) : (
            <PlayIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;
