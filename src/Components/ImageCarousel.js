import React, { useState } from 'react';

const ImageCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
    console.log(props.images)
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % props.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + props.images.length) % props.images.length);
  };

  return (
    <div>
      <button onClick={handlePrev}>Previous</button>
      <img src={props.images[currentIndex]} alt="carousel-image" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ImageCarousel;