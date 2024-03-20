import React from 'react';
import './Slider.css';
import sliderImage from './sliderImage.png'; // Путь к изображению

const Slider = ({ onChange }) => {
  const handleSliderChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="slider">
      <img  src={sliderImage} alt="Slider" />
      {/* <input type="range" min="0" max="100" onChange={handleSliderChange} /> */}
    </div>
  );
};

export default Slider;
