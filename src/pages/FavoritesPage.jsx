import React from 'react'
import Header from '../components/Header'
import FavoriteList from '../components/FavoriteList'

export default function FavoritesPage() {
  return (
    <div className='flex items-center justify-center'>
      <Header/>
      <FavoriteList/>
    </div>
  )
}
