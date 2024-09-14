import React from 'react';
import RotatingImagesComponent from './imagesEffects/RotatingImagesComponent';
import ImageNameComp from '../ImageNameComp';

function Images1() {
  const images = [
    'https://res.cloudinary.com/dxnzcewsy/image/upload/v1720556914/juegos/pang-palante/gameOverImg10_e0czee.webp',
    'https://res.cloudinary.com/dxnzcewsy/image/upload/v1720556896/juegos/pang-palante/changeLevel9_v39rgm.webp',
    'https://res.cloudinary.com/dxnzcewsy/image/upload/v1720556905/juegos/pang-palante/darkBubbleCollision_vdzdl7.webp',
    'https://res.cloudinary.com/dxnzcewsy/image/upload/v1720556890/juegos/pang-palante/changeLevel7_fr1gd7.webp',
    'https://res.cloudinary.com/dxnzcewsy/image/upload/v1720556886/juegos/pang-palante/changeLevel4_mrolls.webp',
    'https://res.cloudinary.com/dxnzcewsy/image/upload/v1721041341/juegos/pang-palante/DALL_E_2024-03-01_10.40.35_-_Create_a_dynamic_3D_image_of_a_vibrant_warrior_in_motion_performing_acrobatic_maneuvers_while_slicing_through_colorful_exploding_bubbles_with_a_magic_bh4bjx.webp',
  ];

  return (
    <>
     <ImageNameComp/>
    <div className='images1-component'>
      {images.map((image, index) => (
        <div key={index} className='images1-component-1' style={{ backgroundImage: `url(${image})` }}></div>
      ))}
      {images.map((image, index) => (
      <RotatingImagesComponent key={index} rotatingImage={image} />
      ))}
    </div>
    </>
  );
}

export default Images1;
