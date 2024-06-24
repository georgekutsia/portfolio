import React, { useContext } from 'react';
import { GlobalContext } from '../../../App';

function MyPicture() {
  const {darkLightText} = useContext(GlobalContext);

  return (
    <div className='profile-component'>
      <div className="profile-component-picture">
      <img src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1718972201/portfolio/Profile%20pictures/Img_Perfil1_ianbeb.png" alt="pic1" width="200px" className='profile-component-picture-img' />
      </div>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>
      <h1 style={{color: `${darkLightText}`}}>blas</h1>

    </div>
  );
}

export default MyPicture;



