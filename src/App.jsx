import React, { useState } from 'react';
import Body from './components/Body/Body';
import Button from './components/Button/Button';
import Screen from './components/Screen/Screen';
import Slider from './components/Slider/Slider';
import './App.css';

const App = () => {
  const [text, setText] = useState(''); // Состояние для текста на экране

  // Обработчик изменения слайдера
  const handleSliderChange = (value) => {
    // Обновляем текст на экране
    setText(value);
  };

  // Обработчик нажатия кнопки
  const handleButtonClick = () => {
    // Здесь может быть логика для загрузки следующей страницы
    console.log('Button clicked!');
  };

  return (
    <div className="app">
      <Body />
      <Button onClick={handleButtonClick} />
      <Screen text={text} />
      <Slider onChange={handleSliderChange} />
    </div>
  );
};

export default App;
