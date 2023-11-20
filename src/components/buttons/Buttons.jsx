import React from 'react'
import Button from './button/Button'
import "./Buttons.css"

function Buttons() {
  return (
    <div className='buttons-box'>
      <div className='buttons-box-div'>
        <Button classBtn={"button0"}/>
        <Button classBtn={"button4"}/>
        <Button classBtn={"button2"}/>
        <Button classBtn={"button1"}/>
        <Button classBtn={"button3"}/>
      </div>
    </div>
  )
}

export default Buttons