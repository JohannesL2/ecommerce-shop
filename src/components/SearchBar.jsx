import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
  return (
    <div className='flex justify-between py-3 px-6 bg-gray-50 border-b'>
        <form action="">
            <div className='relative flex items-center text-gray-400 text-lg'>
                <FaSearch className='w-5 h-5 absolute ml-3 pointer-events-none'/>

                <input 
                    type="text"
                    name='search'
                    placeholder='Search'
                    autoComplete='off'
                    aria-label='Search'
                    className='pr-3 pl-10 font-semibold placeholder-gray-500 text-black bg-transparent outline-none'
                />
            </div>
        </form>
    </div>
  )
}
