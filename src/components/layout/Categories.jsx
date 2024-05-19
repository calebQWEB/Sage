import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='flex items-center justify-between gap-10 absolute top-full bg-white-100 p-3 sm:rounded-md'>
        <ul className='grid gap-3 text-gray-900'>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Self-Help</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Adventure</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Mystery</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>History</Link></li>
        </ul>

        <ul className='grid gap-3 text-gray-900'>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Autobiography</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Fiction</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Nature</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Sci-fi</Link></li>
        </ul>

        <ul className='grid gap-3 text-gray-900'>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Fantasy</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Educational</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Thriller</Link></li>
            <li className='lg:text-link text-linkMobile font-medium hover:underline'><Link>Humor</Link></li>
        </ul>
    </div>
  )
}

export default Categories