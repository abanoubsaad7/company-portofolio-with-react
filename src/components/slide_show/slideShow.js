import React, { useState, useEffect } from 'react';

const images = [
  '/img/cover.png',
];

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} className={`slide ${index === currentIndex ? 'active' : ''}`} alt='...'/>
        </div>
      ))}
    </div>
    
  );
};

export default SlideShow;
