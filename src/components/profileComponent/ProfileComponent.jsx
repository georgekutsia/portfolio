import React, { useContext } from 'react';
import MyPicture from './myPicture/MyPicture';
import { GlobalContext } from '../../App';

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

  return (
    <div>
    {normalCartoon && <MyPicture profPic1={profPic1} profPic2={profPic2} profPic3={profPic3} profPic4={profPic4} saturate={2.4} /> }

   {!normalCartoon &&   <MyPicture profPic1={profDraw1} profPic2={profDraw2} profPic3={profDraw3} profPic4={profDraw4} saturate={1}/>}
        <h3>fldaf</h3>
        <p>Contenido adicional para probar el desplazamiento...</p>
    </div>
  );
}

export default ProfileComponent;
