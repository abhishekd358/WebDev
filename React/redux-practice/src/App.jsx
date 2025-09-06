import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'


export default function App() {
  return (
    <>
      <Header />
    <Routes>
      
      <Route path="/" element={<Home/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>

    </Routes>
    </>
  )
}