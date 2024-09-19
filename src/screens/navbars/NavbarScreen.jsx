import React from 'react'
import { CirclePopupNavbarComponent, CloseAllComponent } from '../../components'

function NavbarScreen({closeComponent}) {
  return (
    <div className='navbar-screen'>
        <CloseAllComponent setComponent={closeComponent}/>
        <CirclePopupNavbarComponent/>
    </div>
  )
}

export default NavbarScreen