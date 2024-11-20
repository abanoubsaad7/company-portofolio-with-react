import React, { useState, useEffect } from 'react';

const images = [
  '/img/slide1.jpg',
  '/img/slide2.jpg',
  '/img/slide3.jpg',
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
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
    
  );
};

export default SlideShow;
