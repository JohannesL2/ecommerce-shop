import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Cart'

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal} = useContext(CartContext)

  return (
    <div className='grid grid-cols-1 gap-4 size-50'>
      <h2 className='font-semibold text-xl text-stone-800 mb-2'>Cart</h2>
      <div className='flex flex-col gap-4'>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <h2>{item.title}</h2>
          <p>${item.price}</p>

        <div className='flex items-center justify-center gap-4 mt-4'>
          <button onClick={() => {
            addToCart(item)
          }}>+</button>
          <p>{item.quantity}</p>
          <button onClick={() => {
            removeFromCart(item)
          }}>-</button>
        </div>
        </div>
      ))}
      </div>
      {
        cartItems.length > 0 ? (
                  <div>
          <h2>Total: ${getCartTotal().toFixed(2)}</h2>
          <button onClick={() => {
            clearCart()
          }}>Clear cart</button>
                </div>
        ) : (
    <h2>Your cart is empty</h2>
        )}
        </div>
  )
}