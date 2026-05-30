import React, { useEffect, useState } from 'react'
import { Data} from '../componnents/Datacontext';
import ProductsList from '../componnents/ProductsList';

const Product = () => {
 
  const {getproduct,products}=Data()
  useEffect(()=>{
   getproduct()
  },[])
  

  return (
    <div className='py-10'>
      {
      products?<div className='flex h-screen justify-center items-center'>
        <div className=' bg-white m-h-screen'>
          <ProductsList/>
        </div>
        
       </div>:
       <div className='min-h-screen  flex justify-center items-center'>
         <img src="https://i.pinimg.com/originals/f6/65/6a/f6656aa6fdb6b8f905dea0bcc2d71dd8.gif" alt="Loading..." className=' '/>
       </div>
      }
    </div>
  )
}

export default Product;
