import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CartContext } from '../context/Cart'
import { FavoriteContext } from '../context/Favorites'
import { Dialog, DialogPanel } from '@headlessui/react'

export default function ShopItems() {
  const [products, setProducts] = useState([])
  const {cartItems, addToCart} = useContext(CartContext)

  const { favoriteItems, addToFavorites, removeFromFavorites } = useContext(FavoriteContext)

  {/*Modal*/}
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => setProducts(res.data))
    .catch(error => console.error('Error fetching data:', error))
  }, [])

  const openDialog = (product) => {
    setSelectedProduct(product)
    setIsOpen(true)
  }

  const isFavorite = (product) => favoriteItems.some(item => item.id === product.id)

  return (
    <div className='pt-30'>
    <ul className='grid grid-cols-2 gap-4'>
        {products.map(product => (
          <li key={product.id} className='bg-stone-400 p-4 rounded-lg'>
          <img src={product.image} alt="" className='size-24 object-contain mx-auto'
          onClick={() => openDialog(product)}
          />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <div className='relative flex gap-4 justify-center pt-4'>
          <button onClick={() => addToCart(product)} className='bg-blue-300 hover:bg-blue-400 text-white font-semibold p-4 rounded-2xl cursor-pointer transition'>Add to cart</button>
          <button onClick={() =>
            {
            isFavorite(product) ? removeFromFavorites(product) :
             addToFavorites(product)}}
             className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-transform duration-300
             ${isFavorite(product)
              ? 'bg-red-500 text-white scale-110'
              : 'bg-white text-gray-600 hover:bg-yellow-300 hover:text-white hover:scale-110'
             }`}>
              {isFavorite(product) ? '❤️' : '🤍'}
              </button>
          </div>
          </li>
        ))}
      </ul>

      {/*Dialog panel*/}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50">
        <div className='fixed inset-0 bg-black/60' aria-hidden="true">
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <DialogPanel className="relative max-w-md h-[90vh] sm:w-[400px] sm:h-[400px] w-full bg-white rounded-lg p-6">
            <button onClick={() => setIsOpen(false)} className='absolute top-2 right-2 text-xl'>X</button>
            {selectedProduct && (
              <div className='text-center'>
                <img src={selectedProduct.image} alt="" className='size-50 object-contain mx-auto'/>
                <h2>{selectedProduct.title}</h2>
                <h2 className='font-bold text-xl'>${selectedProduct.price}</h2>
                <p className='p-4 mt-2 bg-stone-100 rounded-lg'>{selectedProduct.description}</p>
              </div>
            )}
          </DialogPanel>
        </div>
        </div>
      </Dialog>
    </div>
  )
}
