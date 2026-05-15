import { useEffect, useState } from "react";
import { Data } from "./Datacontext";

const ProductFilter=({searchval,setsearchval,category1,setcategory1,brand1,setbrand1,pricerange,setpricerange})=>{
   const {products,getproduct,category,brand}=Data()

   useEffect(()=>{
       getproduct();
   },[])

   const hanleReset=()=>{
      setsearchval("");
      setcategory1("All");
      setbrand1("All");
      setpricerange([0,1000]);
   }

    return(
       <div className="ml-7">
          <div className="mt-6">
            <input className="w-[60%] pb-1 pl-2 shadow-lg shadow-black outline-0 border" type="search" placeholder="Search products..."
            value={searchval} onChange={(e)=>setsearchval(e.target.value)} />
            <h2 className=" font-semibold mt-4">Category</h2>
            {
               category.map((item,index)=>(
                  <div key={index} className="flex items-center mt-2">
                     <input type="checkbox" id={index} className="mr-2 accent-red-600"
                      name={item} checked={category1 === item} value={item} onChange={(e)=>setcategory1(e.target.value)} />
                     <label htmlFor={index} className="text-sm">{item}</label>
                  </div>
               ))
            }
         </div>  
         <div>
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
            <button onClick={hanleReset} className=" bg-red-600 text-white pb-0.5 px-1 rounded-lg cursor-pointer mt-2"> Reset Filter</button>
         </div>      
       </div>
    )
}

export default ProductFilter;