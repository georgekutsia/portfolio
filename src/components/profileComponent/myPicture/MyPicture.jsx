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
        <video className='video-profile-me' muted playsInline preload loop src="https://framerusercontent.com/modules/assets/de1SZVgW6x8oriFKmGD2vCLl4M~QgE11NLqSikToAlO4zGwAzyGWgrXLn2cqTQMkVVJmig.mp4"></video>
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



