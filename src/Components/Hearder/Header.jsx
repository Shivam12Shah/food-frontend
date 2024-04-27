import React, { useState } from 'react'

const Header = () => {

  return (
    <div className='header '>
      <div className="header-content relative h-[70vh] px-20 " >
       <div className="textdiv absolute bottom-10 ">
       <h1 className='text-white font-bold text-6xl my-5'>Order Your <br /> Favorite  Food Online</h1>
        <p className='text-white w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ullam vitae exercitationem temporibus accusantium illo quasi eos voluptas in ad. Ipsum nesciunt odit eum ad vel quos ea blanditiis officia.</p>
        <button className='bg-slate-100 px-4 py-2 my-2 rounded-[50px]'>View Menu</button>
       </div>
      </div>
    </div>
  )
}

export default Header
