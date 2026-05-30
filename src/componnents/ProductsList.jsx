import React, { useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Data } from './Datacontext';
import { useNavigate } from 'react-router';
import { Carts } from './Cartcontext';

const ProductsList = () => {
  const {getproduct,products,searchval,category1,brand1,pricerange}=Data()
  const {Addcart}=Carts()
  const navigate=useNavigate()
  
  useEffect(()=>{
    getproduct()
  },[])
  const FilterProduct=products.filter((item)=>
    item.title.toLowerCase().includes(searchval.toLowerCase())&&
    (category1==="All"||item.category===category1)&&
    (brand1==="All"||item.brand===brand1)&&
    item.price<=pricerange[1] && item.price>=pricerange[0]
  )
  return (
    <div className=' min-h-screen'>
    <div className=' max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 gap-y-5 h-screen overflow-y-scroll px-2 py-5'>
      {
        FilterProduct?.map((items,index)=>(
            <div key={index} className='shadow-lg border border-green-500 shadow-black flex flex-col justify-between items-center rounded-lg'>
                <img className=' -mb-5 -mt-2' src={items.images} alt="Image not found" onClick={()=>navigate(`/product/${items.id}`)} />
                <div className=' text-center'>
                <h1 className=' line-clamp-2 text-sm font-semibold mt-3'>{items.title}</h1>
                </div>
                <p className=' text-sm font-semibold text-red-600'>${items.price}</p>
                <div>
                <button onClick={()=>Addcart(items)} className=' bg-red-600 flex items-center justify-center gap-1 text-white rounded-lg cursor-pointer mt-2 mb-2 px-2 py-1 text-sm '><FaShoppingCart className='size-4.5 text-white' /> Add to Cart</button>
                </div>
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default ProductsList
