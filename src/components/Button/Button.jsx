import React from 'react';
import './Button.css';
import buttonImage from './buttonImage.png'; // Путь к изображению

const Button = ({ onClick }) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <div className="button" onClick={handleClick}>
            <img src={buttonImage} alt="Button" />
        </div>
    );
};

export default Button;
