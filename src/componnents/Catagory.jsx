
import React, { useEffect } from 'react'
import { Data } from './Datacontext'

const Catagory = () => {
    const {products,getproduct,category}=Data()
    useEffect(()=>{
        getproduct()
    },[])
  return (
    <div className='w-full hidden md:flex justify-around items-center'>
      {
        category.map((item)=>(
          <button className='bg-black text-white rounded-lg px-1 py-1 text-sm truncate min-w-[80]'>{item}</button>
        ))
      }
    </div>
  )
}

export default Catagory;
