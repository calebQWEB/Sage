import {useState} from 'react'
import { Link } from 'react-router-dom'
import {useApi} from '../../utils/api'

const Categories = () => {
  const {fetchBooksByCategory} = useApi()

  return (
    <div className='z-50 flex items-center justify-between gap-10 absolute top-full bg-white-100 p-3 sm:rounded-md'>
        <ul className='grid gap-3 text-gray-900'>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/Self-Help'>Self-Help</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/Adventure'>Adventure</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/Mystery'>Mystery</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/History'>History</Link></li>
        </ul>

        <ul className='grid gap-3 text-gray-900'>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/Autobiography'>Autobiography</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/Romance'>Romance</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/Nature'>Nature</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/Sci-fi'>Sci-fi</Link></li>
        </ul>

        <ul className='grid gap-3 text-gray-900'>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/Fantasy'>Fantasy</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/Categories/Education'>Education</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/Thriller'>Thriller</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link to='/categories/Humor'>Humor</Link></li>
        </ul>
    </div>
  )
}

export default Categories