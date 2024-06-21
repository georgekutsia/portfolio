import React from 'react'
import { ProfileComponent, ModeButtons } from '../../components'

function ProfileScreen() {
  return (
    <div className='profile'>
    <ModeButtons/>
    <ProfileComponent/>
    </div>
  )
}

export default ProfileScreen