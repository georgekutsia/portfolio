import React from 'react'
import { CirclePopupNavbar1Component, CirclePopupNavbar2Component, CloseAllComponent } from '../../components'

function NavbarScreen({closeComponent}) {
  return (
    <div className='navbar-screen d-flex pt-5'>
        <CloseAllComponent setComponent={closeComponent}/>
        <CirclePopupNavbar1Component/>
        <CirclePopupNavbar2Component/>
    </div>
  )
}

export default NavbarScreen