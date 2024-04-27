import React, { useState } from 'react'

const Header = () => {

  return (
    <div className='header px-20 max-sm:px-3'>
      <div className="header-content relative h-[70vh] max-sm:h-[24vh]  " >
       <div className="textdiv absolute bottom-5 w-[80%] mx-auto px-10 max-sm:px-6 ">
       <h1 className='text-white font-bold text-6xl my-5  max-sm:text-xl max-sm:my-1'>Order Your <br /> Favorite  Food Online</h1>
        <p className='text-white w-full max-sm:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ullam vitae exercitationem temporibus accusantium illo quasi eos voluptas in ad. Ipsum nesciunt odit eum ad vel quos ea blanditiis officia.</p>
        <button className='bg-slate-100 px-4 py-2 my-2 rounded-[50px] max-sm:px-2 max-sm:py-1'>View Menu</button>
       </div>
      </div>
    </div>
  )
}

export default Header
