import React, { useState } from 'react'
import ListadoDeLibros from "./ListadoDeLibros"

function Libreria1() {
  const [counter, setCounter] = useState(0)

  const counter2 = 0;

  const addCounter = (value)=> {
    counter2 = value
  }
  return (
    <div className='libreria1'>
          

    </div>
  )
}

export default Libreria1