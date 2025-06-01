import React, { useContext } from 'react'
import { FavoriteContext } from '../context/FavoritesTemp'

export default function FavoriteList() {
  const {favoriteItems, removeFromFavorites} = useContext(FavoriteContext)

  if (favoriteItems.length === 0) {
    return <p>You have no favorite items.</p>
  }

  return (
    <div className='pt-30'>
      <h2 className='font-semibold text-xl text-stone-800 mb-2'>Your Favorites</h2>
      {favoriteItems.map(item => (
        <div key={item.id} className='grid grid-cols-1 gap-4'>
          <h3 className='p-4'>{item.title}</h3>
          <img src={item.image} alt="" className='size-24 object-contain mx-auto'/>
          <button onClick={() => removeFromFavorites(item)}>Remove</button>
        </div>
      ))}
    </div>
  )
}