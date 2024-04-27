import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar flex items-center justify-between px-20 py-4 max-[600px]:px-2 '>
        <img className='max-[600px]:w-[100px]' src={assets.logo} alt="" />
        <ul className=' navbarmenu flex gap-5 font-medium max-[600px]:hidden'>
            <NavLink>Home</NavLink>
            <NavLink>Menu</NavLink>
            <NavLink>Mobile-App</NavLink>
            <NavLink>Contact-Us</NavLink>
        </ul>
        <div className="navrright flex gap-5 items-center justify-center">
            <img className='w-[20px] h-[20px]' src={assets.search_icon} alt="" />
            <div className="navbarserch-icon relative">
                <img  className='w-[20px] h-[20px]' src={assets.basket_icon} alt="" />
                <div className="dot absolute w-[10px] h-[10px] bg-red-500 rounded-full -top-2 -right-2">

                </div>
            </div>
            <button className=' px-4 py-1 rounded-[50px] border border-black' >Sign In</button>

        </div>
    </div>
  )
}

export default Navbar
