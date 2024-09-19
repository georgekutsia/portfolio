import React, { useContext } from 'react'
import { GlobalContext } from '../../../App';

function Button1({classBtn, text, onClick}) {
  const {darkLightText} = useContext(GlobalContext);

  return (
      <button type="button" onClick={onClick}  style={{color: `${darkLightText}`}} className={`custom-btn1 ${classBtn}`}> <span> {text} </span></button>
  )
}

export default Button1