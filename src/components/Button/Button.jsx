import React from 'react';
import './Button.css';
import buttonImage from './buttonImage.png'; // Путь к изображению кнопки

const Button = ({ onClick }) => {
  const handleMouseDown = () => {
    onClick();
  };

  const handleMouseUp = () => {
    // Дополнительная логика при отпускании кнопки, если необходимо
  };

  return (
    <div className="button" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <img src={buttonImage} alt="Button" />
    </div>
  );
};

export default Button;
