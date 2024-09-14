import React from 'react';

function RotatingImagesComponent({ rotatingImage }) {
  return (
    <div className='containerRotate'>
      <div className='left-half'></div>
      <div className='right-half'></div>
      <img src={rotatingImage} alt='Imagen' className='imageRotate' />
    </div>
  );
}

export default RotatingImagesComponent;
