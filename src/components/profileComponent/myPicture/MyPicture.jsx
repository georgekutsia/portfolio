import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../../../App';
import Form from 'react-bootstrap/Form';
function MyPicture({ profPic1, profPic2, profPic3, profPic4, saturate}) {
  const { darkLightText, language } = useContext(GlobalContext);
  const pictureRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [imageSrc, setImageSrc] = useState(profPic1);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      let newImageSrc = imageSrc;

      if (window.scrollY >=0 && window.scrollY <= 149) {
        newImageSrc = profPic1;
      } else if (window.scrollY >= 150 && window.scrollY <= 299) {
        newImageSrc = profPic2
      } else if (window.scrollY >= 300 && window.scrollY <= 449) {
        newImageSrc = profPic3
      } else if (window.scrollY >= 450) {
        newImageSrc = profPic4
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
  }, [imageSrc]);

  let text;
  switch (language) {
    case "esp":
      text = <h2>heyyy</h2>;
      break;
    case "eng":
      text = <h2>hello</h2>;
      break;
    case "ger":
      text = <h2>hallo</h2>;
      break;
    default:
      text = null;
  }

  return (
    <div className='profile-component'>
      <div className="profile-component-picture-wrapper">
        <div className="profile-component-picture" ref={pictureRef}>
          <img       style={{ filter: `saturate(${saturate})` }}src={imageSrc} alt="pic1" className={`profile-component-picture-img ${fadeClass}`} />
        </div>
      </div>
      <h1 style={{ color: `${darkLightText}` }}>blas</h1>
      {text}
      <h1 style={{ color: `${darkLightText}` }}>blas</h1>
    </div>
  );
}

export default MyPicture;
