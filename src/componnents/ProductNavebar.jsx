import React, { useEffect, useState } from 'react'
import { BsFilterLeft } from "react-icons/bs";
import { NavLink,Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { Data } from './Datacontext';
import { IoMdClose } from "react-icons/io";
import { Carts } from './Cartcontext';

const ProductNavebar = () => {
    const [filter,setfilter]=useState(false)
    const {getproduct,brand,category,searchval,setsearchval,category1,setcategory1,brand1,setbrand1,pricerange,setpricerange}=Data()
    const {Cartitem}=Carts()
    
// useeffect for open product page then open filter menu to prevent scroll product page
    useEffect(()=>{
      if(filter){
        document.body.classList.add('overflow-hidden');
      }
      else{
        document.body.classList.remove('overflow-hidden')
      }
//  ended useeffect

    },[filter])

    const hanleReset=()=>{
      setsearchval("");
      setcategory1("All");
      setbrand1("All");
      setpricerange([0,1000]);
   }

  return (
    <div className=' fixed top-0 w-full bg-white ov'>
      <nav className=' h-12 w-full bg-white shadow-2xl shadow-black flex justify-between items-center gap-7 px-4'>
        <button onClick={()=>setfilter(!filter)} className=' cursor-pointer'><BsFilterLeft /></button>
        <input className="w-[60%] pb-1 pl-2 shadow-lg shadow-black outline-0 border" type="text" placeholder="Search products..."
            value={searchval} onChange={(e)=>setsearchval(e.target.value)} />
        <ul className='hidden md:flex gap-7 justify-center items-center '> 
              <NavLink to="/" className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>Home</li></NavLink>
              <NavLink to="/Product" className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>Products</li></NavLink>
              <NavLink to="/About" className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>About</li></NavLink>
              <NavLink to="/Contact" className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>Contact</li></NavLink>
            </ul>
            <div className='flex relative'>
              <Link to="/Cart">
                <FaShoppingCart className='size-4.5' />
                <span className='absolute -top-2 left-4.5 font-bold text-sm  text-red-700 '>{Cartitem?.length}</span>
              </Link>
            </div>
      </nav>
      {filter && (
        <div className='bg-white w-[50%] py-11 absolute top-0 left-0 z-10 flex flex-col items-center'>
          <button onClick={()=>setfilter(false)} className=' absolute right-1 top-1'><IoMdClose /></button>
          <div className=" ml-5">
            <h2 className=" font-semibold mt-4">Category</h2>
            {
               category.map((item,index)=>(
                  <div key={index} className="flex items-center mt-2">
                     <input type="checkbox" id={index} className=" accent-red-600 "
                      name={item} checked={category1 === item} value={item} onChange={(e)=>setcategory1(e.target.value)} />
                     <label htmlFor={index} className="text-sm ml-2">{item}</label>
                  </div>
               ))
            }
         </div>  
         <div className='ml-5'>
            <h2 className=" font-semibold mt-4">Brand</h2>
            <select  className=" w-[60%] mt-2 border outline-0 pb-1 pl-2 shadow-lg shadow-black"
             value={brand1} onChange={(e)=>setbrand1(e.target.value)}>
            {
               brand.map((item,index)=>(
                 <option value={item}>{item}</option> 
               ))
            }
            </select>
            <h2 className=" font-semibold mt-4">Price Range</h2>
            <div>
               <label className="text-sm">Price Range: <span className=" text-blue-600">${pricerange[0]} - ${pricerange[1]}</span></label>
               <br />
               <input  type="range" min="0" max="1000" className="w-[60%] mt-2 accent-red-600" 
               onChange={(e)=>setpricerange([pricerange[0],Number(e.target.value)])}/>
            </div>
            <button onClick={hanleReset} className=" bg-red-600 text-white pb-0.5 px-5 mb-2 rounded-lg cursor-pointer mt-2"> Reset Filter</button>
         </div>      
        </div>
      )}
    </div>
  )
}

export default ProductNavebar
