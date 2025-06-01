import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import ShoppingCart from './pages/ShoppingCart'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shoppingcart' element={<ShoppingCart/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
    </Routes>
    </>
  )
}

export default App
