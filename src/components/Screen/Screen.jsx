import React from 'react';
import './Screen.css';
import screenImage from './screenImage.png'; // Путь к изображению

const Screen = ({ text }) => {
	return (
		<div className="screen">
			<img src={screenImage} alt="Screen" />
			{/* <p>скрипт: {text}</p> */}
		</div>
	);
};

export default Screen;
