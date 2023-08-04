import React from 'react'

function Errors1({error}) {
  return (
    <>
      {error && <div>
          {error.type === "required" && "el campo es requerido"}
          {error.type === "min" && "el numero tiene que ser mayor que eso "}
          {error.type === "minLength" && "escribe más"}
          {error.type === "maxLength" && "escribe menos"}
      </div>} 
    </>
  )
}

export default Errors1