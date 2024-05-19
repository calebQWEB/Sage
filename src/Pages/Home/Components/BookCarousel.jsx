import React from 'react'
import Button from '../../../components/common/Button'

const BookCarousel = ({bookImage, bookName, author}) => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-start gap-10'>
        <img src={bookImage} alt={bookName}/>

        <div className='flex flex-col gap-3 justify-center items-center sm:justify-end sm:items-end'>
            <h1 className='text-xl text-text sm:text-4xl font-black'>{bookName}</h1>
            <span className='text-linkMobile sm:text-link text-center sm:text-end text-text'>-{author}</span>
            <Button text='Start Reading'/>
        </div>
    </div>
  )
}

export default BookCarousel