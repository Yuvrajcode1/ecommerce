import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const ProductsList = ({FilterProduct}) => {
  return (
    <div className=' grid grid-cols-2 sm:grid-cols-4 gap-3 gap-y-5 h-screen overflow-y-scroll p-2'>
      {
        FilterProduct?.map((items,index)=>(
            <div key={index} className='max-w-32 max-h-52 sm:max-w-52 sm:max-h-72 shadow-lg shadow-black flex flex-col justify-between items-center rounded-lg'>
                <img className=' -mb-5 -mt-2' src={items.images} alt="Image not found" />
                <div className=' text-center'>
                <h1 className=' line-clamp-2 text-sm font-semibold mt-3'>{items.title}</h1>
                </div>
                <p className=' text-sm font-semibold text-red-600'>${items.price}</p>
                <div>
                <button className=' bg-red-600 flex items-center justify-center gap-1 text-white rounded-lg cursor-pointer mt-2 mb-2 px-2 py-1 text-sm '><FaShoppingCart className='size-4.5 text-white' /> Add to Cart</button>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default ProductsList
