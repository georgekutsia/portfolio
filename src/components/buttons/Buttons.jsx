import React from 'react'
import Button1 from './button/Button1'
import "./Buttons.css"
import Button2 from './button/Button2'

function Buttons() {
  return (
    <div className='buttons-box'>
      <div className='buttons-box-div'>
        <Button1 classBtn={"button0"}/>
        <Button1 classBtn={"button4"}/>
        <Button1 classBtn={"button2"}/>
        <Button1 classBtn={"button1"}/>
        <Button1 classBtn={"button3"}/>
      </div>
      <div className='buttons-box'>
        <Button2 classBtn={"button5"}/>
        <Button2 classBtn={"button6"}/>
        <Button2 classBtn={"button7"}/>
        <Button2 classBtn={"button8"}/>
        <Button2 classBtn={"button9"}/>
      </div>
    </div>
  )
}

export default Buttons