// src/App.js
import React from 'react';
import "./style.css";
import ImageSlider from './ImageSlider';

const App = () => {
  const apiKey = 'Cxi3g2NR1dz9eOFBsb3O9eH6TSF2Pxbmf1TOBWixnDV3Oxz78V4fuTCB'; // Replace with your actual API key

  return (
    <div className="App">
      <h1>Random Image Slider</h1>
      <ImageSlider apiKey={apiKey} />
    </div>
  );
};

export default App;
