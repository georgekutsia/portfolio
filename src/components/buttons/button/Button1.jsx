import React from 'react'

function Button1({classBtn}) {
  return (
      <button className={`custom-btn1 ${classBtn}`}> <span> Hover </span></button>
  )
}

export default Button1