import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../../App';
import { MyPictureComponent, ProjectComponent } from '../index';

function ProfileComponent() {
  const { darkLightText, language, normalCartoon } = useContext(GlobalContext);
  const projectsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY >= 0 && window.scrollY <= 249) {
        projectsRef.current.style.marginLeft = "0%";

      } else if (window.scrollY >= 250&& window.scrollY <= 499) {
        projectsRef.current.style.marginLeft = "25%";
      } else if (window.scrollY >= 500 && window.scrollY <= 749) {

      } else if (window.scrollY >= 850) {
        if (projectsRef.current) {
          // pictureRef.current.style.marginLeft = "0px";
        }

      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const profPic1 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1718972201/portfolio/Profile%20pictures/Img_Perfil1_ianbeb.png";
  const profPic2 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1718972201/portfolio/Profile%20pictures/Img_Perfil4_kmw3w0.png";
  const profPic3 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1718972201/portfolio/Profile%20pictures/Img_Perfil3_ng6z4d.png";
  const profPic4 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1718972201/portfolio/Profile%20pictures/Img_Perfil2_ji6tkt.png";

  const profDraw1 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1719569570/img11_j19lgc.png";
  const profDraw2 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1719569571/img2_fofxdi.png";
  const profDraw3 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1719569571/img4_o51prl.png";
  const profDraw4 = "https://res.cloudinary.com/dxnzcewsy/image/upload/v1719569575/img3_iqk9oj.png";

  const projectImg1= "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693905096/proyecto%20final/usuarios/trabajador-joven-usa-movil-oficina-2718441_uech8z.webp";
  const projectImg2= "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693905079/proyecto%20final/usuarios/IMG_1192-2_tcl82c.webp";
  const projectImg3= "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693905092/proyecto%20final/usuarios/portada-foto-perfil-redes-sociales-consejos_t022ap.jpg";

  const programsUsed1 = ["img/prExpres.png", "img/prAngular.png"];
  const programsUsed2 = ["img/prJs.png", "img/prHtml.png", "img/prCss.png", "img/prHtml.png"];

  return (
    <div>
      <section ref={projectsRef} className='projects'>
        <ProjectComponent nombreProyecto={"Bulala"} projectImg={projectImg1}  programsUsed={programsUsed1} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg2}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg3}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Bulala"} projectImg={projectImg1}  programsUsed={programsUsed1} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg2}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg3}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Bulala"} projectImg={projectImg1}  programsUsed={programsUsed1} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg2}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg3}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Bulala"} projectImg={projectImg1}  programsUsed={programsUsed1} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg2}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg3}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Bulala"} projectImg={projectImg1}  programsUsed={programsUsed1} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg2}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg3}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Bulala"} projectImg={projectImg1}  programsUsed={programsUsed1} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg2}  programsUsed={programsUsed2} />
        <ProjectComponent nombreProyecto={"Cacafuti"} projectImg={projectImg3}  programsUsed={programsUsed2} />
      </section>
      {normalCartoon && <MyPictureComponent profPic1={profPic1} profPic2={profPic2} profPic3={profPic3} profPic4={profPic4} saturate={2.4} />}
      {!normalCartoon && <MyPictureComponent profPic1={profDraw1} profPic2={profDraw2} profPic3={profDraw3} profPic4={profDraw4} saturate={1} />}
    </div>
  );
}

export default ProfileComponent;
