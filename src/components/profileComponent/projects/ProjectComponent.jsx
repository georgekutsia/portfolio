import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function ProjectComponent({nombreProyecto, programsUsed, projectImg, aditionalInfo1,aditionalInfo2 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlayable, setIsPlayable] = useState(false);

  return (
    <div data-aos="fade-up" data-aos-delay="100" className='project'  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <header className='project-header'>{nombreProyecto}</header>
      <img className='project-img' src={projectImg} alt="project" />
      {isHovered && 
          <div className='project-additional-info'>
            {!isPlayable && 
              <i  className="fa-brands fa-linkedin project-additional-play" onMouseEnter={() => setIsPlayable(true)} onMouseLeave={() => setIsPlayable(false)}></i>
            }
            {isPlayable && 
            <a style={{width:"10px"}} className='project-additional-link' href="https://www.linkedin.com/feed/update/urn:li:activity:7089574544323022850/" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-play project-additional-play" onMouseEnter={() => setIsPlayable(true)} onMouseLeave={() => setIsPlayable(false)}> </i>
            </a>
            
            }

            
            <div >{aditionalInfo1} {console.log("bulala")}ssdsadasdds</div>
            <div >{aditionalInfo2} {console.log("bulala")}  dadasdsddadasds</div>
          </div>
      }
      <footer className='project-footer'>
        {programsUsed.map((image, index) => (
          <img key={index} src={image} alt="img" className='project-footer-img'/>
        ))}
      </footer>
    </div>
  );
}

export default ProjectComponent;
