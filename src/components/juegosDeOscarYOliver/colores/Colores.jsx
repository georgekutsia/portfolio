import React, { useState } from 'react';

function Colores() {
  const [color1, setColor1] = useState("red")
  const [color2, setColor2] = useState("blue")
  const [color3, setColor3] = useState("yellow")
  const [color4, setColor4] = useState("green")

const handleRandomColor1 =()=>{
  setColor1(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  );
}
const handleRandomColor2 =()=>{
  setColor2(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  );
}
const handleRandomColor3 =()=>{
  setColor3(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  );
}
const handleRandomColor4 =()=>{
  setColor4(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  );
}

  return (
    <div>
      <div className='colores-box'>
      <img  onClick={()=>{handleRandomColor1(); handleRandomColor2(); handleRandomColor3(); handleRandomColor4()}} className='colores-box-circles-white' src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1690842015/portfolio/oscaryoliver/rainbow_wneojk.png" alt="e" />
      <div className='colores-box-circles'>
        <div onClick={()=>handleRandomColor1()} style={{ backgroundColor: `${color1}` }} className='colores-box-circles-circle'></div>
        <div onClick={()=>handleRandomColor2()} style={{ backgroundColor: `${color2}` }}  className='colores-box-circles-circle'></div>
        <div onClick={()=>handleRandomColor3()} style={{ backgroundColor: `${color3}` }}  className='colores-box-circles-circle'></div>
        <div onClick={()=>handleRandomColor4()} style={{ backgroundColor: `${color4}` }}  className='colores-box-circles-circle'></div>
      </div>
      </div>
    </div>
  );
}

export default Colores;
