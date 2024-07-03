import React from 'react'

function ProjectComponent({icons}) {
  return (
    <div className='project'>
        <header className='project-header'>Hola</header>
        <img  className='project-img' src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1693905079/proyecto%20final/usuarios/IMG_1192-2_tcl82c.webp" alt="project" />
        <footer className='project-footer'>
          {icons.map((icon, index) => (
            <i key={index} className={`project-footer-i ${icon}`}></i>
          ))}
        </footer>
    </div>
  )
}

export default ProjectComponent