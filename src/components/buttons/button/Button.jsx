import React from 'react'

import "./Button.css"
function Button({classBtn}) {
  return (
      <button className={`custom-btn ${classBtn}`}> <span> Hover </span></button>
  )
}

export default Button