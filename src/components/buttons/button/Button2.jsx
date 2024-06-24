import React, { useContext } from 'react'
import { GlobalContext } from '../../../App';

function Button2({classBtn}) {
  const {darkLightText} = useContext(GlobalContext);

  return (
    <button style={{color: `${darkLightText}`}}  className={`custom-btn2 ${classBtn}`}> Hover</button>
  )
}

export default Button2