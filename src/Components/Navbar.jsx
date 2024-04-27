import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar w-full flex items-center justify-between px-20 py-4'>
        <img src={assets.logo} alt="" />
        <ul className='min-w-fit navbarmenu flex gap-5 font-medium '>
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
