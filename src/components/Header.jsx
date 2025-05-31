import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <div className='bg-blue-300 fixed top-0 left-0 right-0'>
      <h1>Ecommerce website</h1>
      <ul className='flex flex-cols gap-4 font-semibold text-xl justify-center list-none p-4'>
        <li className='cursor-pointer bg-white rounded-full p-2 hover:scale-115 transition' onClick={() => {
          navigate('/')
        }}>🛍️</li>
        
        <li className='cursor-pointer bg-yellow-200 rounded-full p-2 hover:scale-115 transition' onClick={() => {
          navigate('/favorites')
        }}>⭐</li>

        <li className='cursor-pointer bg-white rounded-full p-2 hover:scale-115 transition' onClick={() => {
          navigate('/shoppingcart')
        }}>🛒</li>
      </ul>
    </div>
  )
}