import React, { useState } from 'react'
import {menu_list, food_list} from "../../assets/assets"

const Explore = ({category , setcategory}) => {
  // console.log(category);


  
  return (
    <div className='explore menu my-5'>
      <h1 className='text-4xl font-semibold'>Explore Our Menu</h1>
      <p className='leading-[18px] my-4'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, quaerat eius impedit, veritatis quos voluptatum ad vel nihil vero, dolore ipsum minima autem eos modi corrupti totam ducimus dolor distinctio? adipisicing elit. Provident, perferendis?</p>
      <div className="explore-menu-list flex items-center gap-3 justify-between  my-10">
        {
          menu_list.map((item, index) => {
            return (
              <div onClick={()=>setcategory(prev=>prev===item.menu_name? "All" : item.menu_name)} key={index} className="explore-menu-item">
                <img className={category===item.menu_name ? "active w-[110px] h-[110px] border-4 rounded-full border-orange-500 " :'w-[110px] h-[110px] rounded-full' } src={item.menu_image} alt={item.name} />
                <h3 className={category===item.menu_name?"active text-white rounded-[50px] text-center my-2 bg-orange-600" : "my-2 text-center text-zinc-700 "}>{item.menu_name}</h3>
              </div>
            )
          })
        }
      </div>
      <hr />
      
    
    </div>
  )
}

export default Explore
