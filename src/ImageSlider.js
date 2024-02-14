import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageSlider = ({ apiKey }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/curated', {
          headers: {
            Authorization: apiKey
          }
        });
        setImageUrls(response.data.photos.map(photo => photo.src.large));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchRandomImages();
  }, [apiKey]);

  const goToPreviousImage = () => {
    setCurrentImageIndex(currentIndex => (currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex(currentIndex => (currentIndex === imageUrls.length - 1 ? 0 : currentIndex + 1));
  };

  return (
    <div className="image-slider">
        <div className="left-arrow" onClick={goToPreviousImage}>
          ⬅
        </div>
        <div className="right-arrow" onClick={goToNextImage}>
          ⮕
        </div>
        <div className="imageholder">
            <div className='image'>
                <img src={imageUrls[currentImageIndex]} alt={`${currentImageIndex + 1}`} />
            </div>
        </div>
    </div>
  );
};

export default ImageSlider;
