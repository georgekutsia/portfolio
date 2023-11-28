import React from 'react'
import Button1 from './button/Button1'
import Button2 from './button/Button2'
import CloseAllComponent from '../close/CloseAllComponent'

function Buttons({closeComponent}) {
  return (
    <div className='buttons-box'>
    <CloseAllComponent setComponent={closeComponent}/>
      <div className='buttons-box-div'>
        <Button1 classBtn={"button0"}/>
        <Button1 classBtn={"button4"}/>
        <Button1 classBtn={"button2"}/>
        <Button1 classBtn={"button1"}/>
        <Button1 classBtn={"button3"}/>
      </div>
      <div className='buttons-box-div'>
        <Button2 classBtn={"button5"}/>
        <Button2 classBtn={"button6"}/>
        <Button2 classBtn={"button7"}/>
        <Button2 classBtn={"button8"}/>
        <Button2 classBtn={"button9"}/>
      </div>
      <div className='buttons-box-div'>
        <button3 classBtn={"button10"}/>
        <button3 classBtn={"button11"}/>
        <button3 classBtn={"button12"}/>
        <button3 classBtn={"button13"}/>
        <button3 classBtn={"button14"}/>
      </div>
    </div>
  )
}

export default Buttons