import React, { useContext, useEffect } from 'react'
import { Data} from '../componnents/Datacontext';
import ProductFilter from '../componnents/ProductFilter';
import ProductsList from '../componnents/ProductsList';

const Product = () => {
  const {getproduct,products}=Data()
  useEffect(()=>{
   getproduct()
  },[])
  console.log(products);
  return (
    <div className=' mt-2'>
      {
      products?<div className='flex h-screen justify-center items-center'>
        <div className='w-[20%]  h-screen sticky top-0'><ProductFilter/></div>
        <div className=' bg-white h-screen w-[80%]'>
          <ProductsList products={products}/>
        </div>
        
       </div>:
       <div className='flex justify-center items-center'>
         <img src="https://i.pinimg.com/originals/f6/65/6a/f6656aa6fdb6b8f905dea0bcc2d71dd8.gif" alt="Loading..." />
       </div>
      }
    </div>
  )
}

export default Product;
