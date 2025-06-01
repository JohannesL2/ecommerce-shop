import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartTemp.jsx'
import { FavoriteProvider } from './context/FavoritesTemp.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <FavoriteProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </FavoriteProvider>
  </StrictMode>
  </BrowserRouter>
)
