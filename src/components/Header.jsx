import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineStar, AiOutlineHome } from 'react-icons/ai'
import SearchBar from './SearchBar'

export default function Header() {
  const navigate = useNavigate()

  return (
  <header className='bg-stone-800 shadow-md fixed top-0 left-0 right-0 z-50'>
    <div className='max-w-6xl mx-auto flex items-center justify-between px-4 h-20 gap-4'>
       <h1
        className='text-white text-2xl font-bold cursor-pointer'
        onClick={() => navigate('/')}
       >
        Fashion<span className='text-yellow-500'>.</span>Shop
        </h1>
        
        <div className='hidden md:block flex-1 max-w-md mx-8'>
        <SearchBar />
        </div>

    <nav>
      <ul className='flex gap-4 items-center gap-2 md:gap-4 list-none'>
        <li className='px-3 py-2 text-white hover:text-yellow-500 font-medium cursor-pointer transition-colors uppercase text-sm tracking-wide' onClick={() => {
          navigate('/')
        }}>
          Home
        </li>
        
        <li className='px-3 py-2 text-white hover:text-yellow-500 font-medium cursor-pointer transition-colors uppercase text-sm tracking-wide' onClick={() => {
          navigate('/favorites')
        }}>
          Collections
        </li>

        <li className='p-2.5 text-yellow-500 hover:bg-stone-700 rounded-full cursor-pointer transition-all flex items-center justify-center' onClick={() => {
          navigate('/shoppingcart')
        }}>
          <AiOutlineShoppingCart size={24} />
        </li>
      </ul>
      </nav>
    </div>
    </header>
  )
}