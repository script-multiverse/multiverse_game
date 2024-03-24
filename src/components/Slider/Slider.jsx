import React from 'react';
import './Slider.css';
import sliderImage from './sliderImage.png'; // Путь к изображению

const Slider = () => {
	
	return (
		<div className="slider">
			<img src={sliderImage} alt="Slider" />
		</div>
	);
};

export default Slider;
