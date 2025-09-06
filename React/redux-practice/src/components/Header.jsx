import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import heart from "../assets/heart.svg"
import { useSelector } from 'react-redux'

export default function Header() {
    const cartItems = useSelector((state)=>state.cartItems)
    const totalItems = cartItems.reduce((accum, item)=> accum = accum + item.quantity, 0)

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">{totalItems}</div>
        </Link>
        <Link className="cart-icon" to="/wishlist">
          <img src={heart} alt="cart-icon" className='heart-icon' />
        </Link>
        </div>

      </div>
    </header>
  )
}