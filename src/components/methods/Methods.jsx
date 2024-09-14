import React, { useState } from 'react'
import CloseAllComponent from '../close/CloseAllComponent'
import MethodsContainer from './methodComponents/MethodsContainer'
import MethodNumberComponents from './methodComponents/MethodNumberComponents'
import MethodStringComponents from './methodComponents/MethodStringComponents'

function Methods({closeComponent}) {
  const [showStrings, setShowStrings] = useState(true)
  const [showNumbers, setShowNumbers] = useState(true)
  const handleShowStrings = ()=>{
    setShowStrings(!showStrings)
  }
  const handleShowNumbers = ()=>{
    setShowNumbers(!showNumbers)
  }
  return (
    <div className='methods'>
        <CloseAllComponent setComponent={closeComponent}/>
        <MethodsContainer name={"Metodos de Numbers"} handleShow={handleShowNumbers}/>
        {showNumbers &&
        <MethodNumberComponents/>
         }
        <MethodsContainer name={"Metodos de Strings"} handleShow={handleShowStrings}/>
        {showStrings &&
        <MethodStringComponents/>
         }
    </div>
  )
}

export default Methods