import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCartItemQuantity, increaseCartItemQuantity } from '../Store/Reducer/cartReducer'

export default function CartItem({ productId,title, rating, price, imageUrl, quantity }) {
  const dispatch = useDispatch()

  const totalIndividaulItemPrice = (quantity * price).toFixed(2)
  console.log(dispatch)
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={()=>dispatch(decreaseCartItemQuantity(productId))}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>dispatch(increaseCartItemQuantity(productId))}>+</button>
      </div>
      <div className="item-total">${totalIndividaulItemPrice}</div>
    </div>
  )
}