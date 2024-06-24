import React, { useContext } from 'react'
import { GlobalContext } from '../../../App';

function Button1({classBtn}) {
  const {darkLightText} = useContext(GlobalContext);

  return (
      <button  style={{color: `${darkLightText}`}} className={`custom-btn1 ${classBtn}`}> <span> Hover </span></button>
  )
}

export default Button1