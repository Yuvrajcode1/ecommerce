import React, { useContext, useEffect, useState } from 'react'
import { Data} from '../componnents/Datacontext';
import ProductFilter from '../componnents/ProductFilter';
import ProductsList from '../componnents/ProductsList';

const Product = () => {
const [searchval,setsearchval]=useState('')
const [category1,setcategory1]=useState('All')
const [brand1,setbrand1]=useState('All')
const [pricerange,setpricerange]=useState([0,1000])

  const {getproduct,products}=Data()
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
    <div className=' mt-2'>
      {
      products?<div className='flex h-screen justify-center items-center'>
        <div className='w-[30%]  h-screen sticky top-0'><ProductFilter searchval={searchval} setsearchval={setsearchval}   category1={category1} setcategory1={setcategory1} brand1={brand1} setbrand1={setbrand1} pricerange={pricerange} setpricerange={setpricerange}/></div>
        <div className=' bg-white h-screen w-[70%]'>
          <ProductsList FilterProduct={FilterProduct}/>
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
