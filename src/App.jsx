import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import PlaceOrder from './Components/PlaceOrder'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />

      </Routes>
    </div>
  )
}

export default App
