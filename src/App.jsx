import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ShoppingCart from './pages/ShoppingCart'
import FavoritesPage from './pages/FavoritesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/shoppingcart' element={<ShoppingCart/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
    </Routes>
    </>
  )
}

export default App
