import React from 'react';
import './Body.css';
import bodyImage from './bodyImage.png'; // Путь к изображению

const Body = () => {
	return (
		<div className="body">
			<img src={bodyImage} alt="Body" />
		</div>
	);
};

export default Body;
