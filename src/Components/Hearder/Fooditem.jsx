import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { addtocartContext } from '../../Context/Context'


const Fooditem = ({id, name , image, price, description, index}) => {

    const {cartitem,
        setcartitem,
        addtocart,
        removefromCart} = useContext(addtocartContext)
  return (
    <div key={index} className='food-card w-[250px] h-[300px] bg-zinc-100 p-2 rounded-md'>
        <div className="imagediv relative">
            <img src={image} alt="" />
            {
                !cartitem[id] ? <img onClick={()=>addtocart(id)} className='w-[35px] absolute right-2 bottom-2' src={assets.add_icon_white} alt="" /> : <div className='absolute bottom-2 right-2 flex bg-slate-100 items-center rounded-[50px] '>
                    <img onClick={()=>removefromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p className='px-2'>{cartitem[id]}</p>
                    <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
                </div>  
            }
        </div>
        <div className="food-item-info">
            <div className="name-rating flex justify-between items-center">
                <h1 className='font-medium'>{name}</h1>
                <img className='w- h-[15px] object-cover' src={assets.rating_starts} alt="" />
            </div>
            <p className='text-sm '>{description}</p>
            <p className='my-2'>${price}</p>
        </div>
 
    </div>
  )
}

export default Fooditem