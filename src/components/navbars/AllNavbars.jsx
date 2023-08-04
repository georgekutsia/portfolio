import React, { useState } from 'react'
import { RickAndMortyNavbar } from '../../screens'

function AllNavbars({handleNavbars}) {
  const [RMNavbar, setRMNavbar] = useState(false)

  return (
    <div className='allNavbars'>
      <ul className='allNavbars-ul'>
        <li>  <button onClick={"bulala"}>dsad</button></li>
        <li>  <button onClick={()=>setRMNavbar(!RMNavbar)}>Rick And morty</button></li>
        <li>  <button onClick={"bulala"}>dsad</button></li>
        <li>  <button onClick={"bulala"}>dsad</button></li>
        <li>  <button onClick={"bulala"}>dsad</button></li>
        <li>  <button onClick={"bulala"}>dsad</button></li>
        <li>  <button onClick={"bulala"}>dsad</button></li>
      </ul>

      {RMNavbar && <RickAndMortyNavbar/>}
    </div>
  )
}

export default AllNavbars