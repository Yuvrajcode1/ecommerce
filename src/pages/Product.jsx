import React, { useContext, useEffect } from 'react'
import { Datacontext } from '../componnents/Datacontext';

const Product = () => {
  const {getproduct,products}=useContext(Datacontext)
  useEffect(()=>{
   getproduct()
  },[])
  console.log(products);
  return (
    <>
    <div>
    {
      products?.slice(20,30).map((item)=>(
        <div>
          <h1>{item.title}</h1>
        </div>
      ))
    }
    </div>
    </>
  )
}

export default Product;
