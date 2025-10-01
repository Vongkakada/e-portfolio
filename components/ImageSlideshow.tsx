import React, { useState, useEffect } from 'react';

interface ImageSlideshowProps {
  urls: string[];
  alt: string;
  className?: string;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ urls, alt, className = 'w-20 h-20 rounded-lg' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (urls.length <= 1) return; // Don't start interval if only one image

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % urls.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId);
  }, [urls.length]);

  return (
    <div className={`${className} flex-shrink-0 slideshow-container`}>
      {urls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`${alt} - slide ${index + 1}`}
          className={`slideshow-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
