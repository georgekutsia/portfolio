import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../../../App';

function MyPictureComponent({ profPic1, profPic2, profPic3, profPic4, saturate }) {
  const { darkLightText, language } = useContext(GlobalContext);
  const pictureRef = useRef(null);
  const imgRef = useRef(null); // Add a reference for the heyhow element
  const [scrollY, setScrollY] = useState(0);
  const [imageSrc, setImageSrc] = useState(profPic1);
  const [fadeClass, setFadeClass] = useState('');
  const [text, setText] = useState("Hola"); // Set initial text to Spanish

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      let newImageSrc = imageSrc;

      if (window.scrollY >= 0 && window.scrollY <= 249) {
        newImageSrc = profPic1;
        pictureRef.current.style.marginLeft = "30%";
        pictureRef.current.style.marginTop = "5vw";
        imgRef.current.style.width = "calc(120px + 8vw)";
        pictureRef.current.style.width = "calc(120px + 8vw)";
        
      } else if (window.scrollY >= 250 && window.scrollY <= 499) {
        newImageSrc = profPic2;
        pictureRef.current.style.marginLeft = "2px";
        pictureRef.current.style.marginTop = "20vh";
        pictureRef.current.style.width = "calc(70px + 8vw)";
        imgRef.current.style.width = "calc(50px + 10vw)";

      } else if (window.scrollY >= 500 && window.scrollY <= 749) {

        pictureRef.current.style.marginLeft = "2px";
        newImageSrc = profPic3;
      } else if (window.scrollY >= 450) {
        newImageSrc = profPic4;

      }
      
      if (newImageSrc !== imageSrc) {
        setFadeClass('fade-out');
        setTimeout(() => {
          setImageSrc(newImageSrc);
          setFadeClass('');
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imageSrc, profPic1, profPic2, profPic3, profPic4]);

  useEffect(() => {
    let newText;
    switch (language) {
      case "esp":
        newText = "Hola";
        break;
      case "eng":
        newText = "hello";
        break;
      case "ger":
        newText = "hallo";
        break;
      default:
        newText = "Hola"; // Default to Spanish
    }
    setText(newText);
  }, [language]); 

  return (
    <div className='profile-component'>
      <div className="profile-component-picture-wrapper">
        <div className="profile-component-picture" ref={pictureRef}>
          <img style={{ filter: `saturate(${saturate})` }} ref={imgRef} src={imageSrc} alt="pic1" className={`profile-component-picture-img ${fadeClass}`} />
        </div>
      </div>
    </div>
  );
}

export default MyPictureComponent;
