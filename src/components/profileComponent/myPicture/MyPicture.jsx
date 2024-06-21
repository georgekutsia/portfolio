import React, { useEffect } from 'react';
import { scroll } from "framer-motion/dom";

function MyPicture() {
  useEffect(() => {
    const video = document.querySelector(".video-profile-me");
    if (video) {
      video.pause();
      scroll((progress) => {
        if (video.readyState) {
          video.currentTime = video.duration * progress;
        }
      });
    }
    return () => {
    };
  }, []);

  return (
    <div className='profile-component'>
      <div className="profile-component-myVideo">
      <img src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1718972201/portfolio/Profile%20pictures/Img_Perfil1_ianbeb.png" alt="pic1" width="200px" />
      </div>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
      <h1>Video scroll scrub demo</h1>
    </div>
  );
}

export default MyPicture;



