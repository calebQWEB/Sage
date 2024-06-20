import React from 'react'
import ProfileHeader from './Sections/ProfileHeader'
import ContinueReading from './Sections/ContinueReading'
import {styles} from '../../styles'

const Profile = () => {
  return (
    <main className={`${styles.paddingX} bg-gray-100`}>
      <ProfileHeader />
      <ContinueReading />
      <div className='w-full h-1 bg-gray-700 block'/>
    </main>
  )
}

export default Profile