import React from 'react'
import { styles } from '../../styles'
import {
  FIrstCategory,
  SecondCategory,
  ThirdCategory,
  FourthCategory,
  FifthCategory,
  SixthCategory,
  SeventhCategory,
  EightCategory,
  NinthCategory,
  TenthCategory,
  EleventhCategory,
  TwelfthCategory
} from './Sections/index'

const UserHomePage = () => {
  
  return (
    <main className={`${styles.padding} bg-gray-100`}>
      <FIrstCategory />
      <SecondCategory />
      <ThirdCategory />
      <FourthCategory />
      <FifthCategory />
      <SixthCategory />
      <SeventhCategory />
      <EightCategory />
      <NinthCategory />
      <TenthCategory />
      <EleventhCategory />
      <TwelfthCategory />
    </main>
  )
}

export default UserHomePage