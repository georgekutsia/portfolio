import React, { useContext } from 'react';
import { GlobalContext } from '../../App';
import { MyPictureComponent, ProjectComponent,  } from '../index'

function ProfileComponent() {
  const { darkLightText, language, normalCartoon } = useContext(GlobalContext);

  const profPic1 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1718972201/portfolio/Profile%20pictures/Img_Perfil1_ianbeb.png";
  const profPic2 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1718972201/portfolio/Profile%20pictures/Img_Perfil4_kmw3w0.png";
  const profPic3 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1718972201/portfolio/Profile%20pictures/Img_Perfil3_ng6z4d.png";
  const profPic4 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1718972201/portfolio/Profile%20pictures/Img_Perfil2_ji6tkt.png";

  const profDraw1 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1719569570/img11_j19lgc.png";
  const profDraw2 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1719569571/img2_fofxdi.png";
  const profDraw3 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1719569571/img4_o51prl.png";
  const profDraw4 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1719569575/img3_iqk9oj.png";
  const icons1 = [ 'fa-brands fa-react', 'fa-brands fa-html5', 'fa-brands fa-sass', 'fa-brands fa-css3','fa-brands fa-angular','fa-brands fa-bootstrap',];
  const icons2 = [ 'fa-brands fa-canvas', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6', 'icon7'];
  const img = [""]
  return (
    <div>
    <section className='projects'>
      <ProjectComponent icons={icons1}/>
      <ProjectComponent icons={icons2}/>
    </section>
    {normalCartoon && <MyPictureComponent profPic1={profPic1} profPic2={profPic2} profPic3={profPic3} profPic4={profPic4} saturate={2.4} /> }
    {!normalCartoon &&   <MyPictureComponent profPic1={profDraw1} profPic2={profDraw2} profPic3={profDraw3} profPic4={profDraw4} saturate={1}/>}
        <h3>fldaf</h3>
    </div>
  );
}

export default ProfileComponent;
