import React, { useContext, useEffect } from 'react'
import { FavoriteContext } from '../context/Favorites'

export default function FavoriteList() {
  const {favoriteItems, removeFromFavorites} = useContext(FavoriteContext)

  return (
    <div className='pt-30'>
      <h2 className='font-semibold text-xl text-stone-800 mb-2'>Your Favorites</h2>
      {favoriteItems.length === 0 ? (
        <p>You have no favorite items yet.</p>
      ) : (
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {favoriteItems.map(item => (
        <li key={item.id} className='grid grid-cols-1 gap-4'>
          <h3 className='p-4'>{item.title}</h3>
          <img src={item.image} alt="" className='size-24 object-contain mx-auto'/>
          <button onClick={() => removeFromFavorites(item)}>Remove</button>
        </li>
      ))}
      </ul>
  )}
</div>
  )
}