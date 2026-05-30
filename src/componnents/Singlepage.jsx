import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Singlepage = () => {
    const params=useParams()
    const [SingleProduct,setSingleProduct]=useState("")
    
const fetchsingleProduct=async()=>{
    try{
         let res=await axios.get(`https://dummyjson.com/products/${params.id}`)
         let product=res.data;
         setSingleProduct(product)
    }
    catch(err){
        console.log(err)
    }
}
useEffect(()=>{
        fetchsingleProduct()
    },[])
    console.log(SingleProduct)
  return (
    <>
    <div className=' mt-6'>
    {
        SingleProduct?<div className=' max-w-5xl mx-auto p-4'>
            <div className=' p-10'>
                <img src={SingleProduct.images} alt="product" className='' />
            </div>
            <div className=' flex flex-col justify-center items-start mb-4 mt-4'>
                <h2 className=' bg-green-500 rounded-2xl px-1 text-sm'>{SingleProduct.rating}<span className=''>⭐</span></h2>
                <h1 className=' mr-40 text-2xl'>{SingleProduct.title}</h1>
                <h1 className=' mr-70 text-red-500 font-bold'>${SingleProduct.price}</h1>
                <p className=' '>{SingleProduct.description}</p>
            </div>
        </div>:
        <div className=' min-h-screen flex justify-center items-center'>
            <img src="https://i.pinimg.com/originals/f6/65/6a/f6656aa6fdb6b8f905dea0bcc2d71dd8.gif" alt="" />
        </div>
    }
    </div>
    </>
  )
}

export default Singlepage;
