import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
  <header className='bg-stone-800 shadow-md fixed top-0 left-0 right-0 z-50'>
    <div className='max-w-6xl mx-auto flex items-center justify-between p-4'>
       <h1
        className='text-white text-2xl font-bold cursor-pointer'
        onClick={() => navigate('/')}
       >
        Ecommerce website
        </h1>
      <ul className='flex gap-4 list-none'>
        <li className='flex items-center justify-center cursor-pointer bg-white rounded-full p-2 hover:scale-110 text-xl shadow transition-transform' onClick={() => {
          navigate('/')
        }}>🛍️</li>
        
        <li className='flex items-center justify-center cursor-pointer bg-yellow-400 rounded-full p-2 hover:scale-110 text-xl shadow transition-transform' onClick={() => {
          navigate('/favorites')
        }}>⭐️</li>

        <li className='flex items-center justify-center cursor-pointer bg-white rounded-full p-2 hover:scale-110 text-xl shadow transition-transform' onClick={() => {
          navigate('/shoppingcart')
        }}>🛒</li>
      </ul>
    </div>
    </header>
  )
}