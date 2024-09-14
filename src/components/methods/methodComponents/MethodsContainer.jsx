import React from 'react'

function MethodsContainer({name, handleShow}) {
  return (
    <div>
    <h4 onClick={()=>handleShow()}>{name} </h4>
    </div>
  )
}

export default MethodsContainer