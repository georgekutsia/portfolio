import React from 'react';

function ProjectComponent({nombreProyecto, programsUsed, projectImg }) {
  return (
    <div className='project'>
      <header className='project-header'>{nombreProyecto}</header>
      <img className='project-img' src={projectImg} alt="project" />
      <footer className='project-footer'>
        {programsUsed.map((image, index) => (
          <img key={index} src={image} alt="img" className='project-footer-img'/>
        ))}
      </footer>
    </div>
  );
}

export default ProjectComponent;
