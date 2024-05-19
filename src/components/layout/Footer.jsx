import React from 'react'
import {styles} from '../../styles'
import Button from '../common/Button'

const Footer = () => {
  return (
    <footer className={`${styles.padding} violet-gradient`}>
        <div className='flex flex-col gap-3 text-center items-center justify-center'>
          <h1 className={`${styles.sectionHeadText}`}><span className="text-white-100">Join</span> our awesome community</h1>
          <p className={`${styles.sectionSubText} w-1/2`}>Embark on an adventure with fellow sages, where friendships are forged and stories are shared.</p>
          <Button text='Join'/>  
        </div>

        <div className='grid sm:flex gap-10 items-center sm:justify-evenly text-center sm:text-left mt-16'>
          <ul className='grid gap-3'>
            <li className='text-linkMobile sm:text-link text-white-100 font-bold'>CONTACT</li>
            <li className='text-white-100 text-linkMobile sm:text-link'>X</li>
            <li className='text-white-100 text-linkMobile sm:text-link'>YOUTUBE</li>
            <li className='text-white-100 text-linkMobile sm:text-link'>TWITTER</li>
          </ul>
          <div className='w-full h-1 bg-gray-700 sm:hidden'/>

          <ul className='grid gap-3'>
            <li className='text-linkMobile sm:text-link text-white-100 font-bold'>QUICK LINKS</li>
            <li className='text-white-100 text-linkMobile sm:text-link'>HOME</li>
            <li className='text-white-100 text-linkMobile sm:text-link'>START READING</li>
            <li className='text-white-100 text-linkMobile sm:text-link'>PRICING</li>
          </ul>
          <div className='w-full h-1 bg-gray-700 sm:hidden'/>

          <ul className='grid gap-3'>
            <li className='text-white-100 text-linkMobile sm:text-link'>GET APP</li>
            <li className='text-white-100 text-linkMobile sm:text-link'>TRY PREMIUM</li>
            <li className='text-white-100 text-linkMobile sm:text-link'>ABOUT US</li>
            <li className='text-white-100 text-linkMobile sm:text-link'>PAYMENT POLICY</li>
          </ul>
          <div className='w-full h-1 bg-gray-700 sm:hidden'/>
        </div>
        <p className='text-linkMobile sm:text-link text-white-100 text-center mt-16'>&copy; 2024 Sage Library. All rights reserved.</p>
    </footer>
  )
}

export default Footer