import React, { useContext } from 'react'
import { addtocartContext } from '../Context/Context';


const PlaceOrder = () => {

  const { getitemtotal } =
  useContext(addtocartContext);

  return (
    <div>
     <form className='place order px-20 my-10 flex gap-10 max-sm:px-4 max-sm:flex-col'>
      <div className="placeoider-left w-1/2 max-sm:w-full">
        <p className='text-xl font-semibold'>Delivery Information</p>
        <div className="multifield flex gap-2 my-1 ">
          <input className='bg-zinc-50 px-3 py-1 rounded w-full border' type="text" placeholder='First Name' />
          <input className='bg-zinc-50 px-3 py-1 rounded w-full border' type="text" placeholder='Last Name' />
        </div>
        <div className="multifield flex gap-2 my-2">
        <input className='bg-zinc-50 px-3 py-1 rounded w-full border' type="text" placeholder='Email address' />
        <input className='bg-zinc-50 px-3 py-1 rounded w-full border' type="text" placeholder='Street' />
        </div>
        <div className="multifield flex gap-2 my-2">
          <input className='bg-zinc-50 px-3 py-1 rounded w-full border' type="text" placeholder='city' />
          <input className='bg-zinc-50 px-3 py-1 rounded w-full border' type="text" placeholder='State' />
        </div>
        <div className="multifield flex gap-2 my-2">
          <input className='bg-zinc-50 px-3 py-1 rounded w-full border' type="text" placeholder='Pincode' />
          <input className='bg-zinc-50 px-3 py-1 rounded w-full border' type="text" placeholder='Country' />

        </div>
        <input className='bg-zinc-50 px-3 py-1 rounded w-full border ' type="text" placeholder=' phone' />
      </div>

      <div className="placeoider-right w-1/2 max-sm:w-full">
      <div className="cart-tatal">
          <h2 className="text-xl font-semibold mb-3">Cart Total</h2>
          <div className="div">
            <hr />
            <div className="taotal-details flex justify-between py-1 ">
              <p>Sub-Total</p>
              <p>₹ {getitemtotal()}</p>
            </div>
            <hr />
            <div className="total-detals  flex justify-between py-1">
              <p>delivery Fee</p>
              <p>₹{getitemtotal() >0 ?20:0}</p>
            </div>
            <hr />
            <div className="total-detals  flex justify-between py-1">
              <p>Total </p>
              <p>₹ {getitemtotal()===0? getitemtotal() : getitemtotal()+20}</p>
            </div>
            <hr />
           <button className="bg-green-600 px-4 py-1 mt-3 rounded-md text-white">Check Out</button> 

          </div>
        </div>
      </div>
     </form>
    </div>
  )
}

export default PlaceOrder
