import axios from 'axios';
import { createContext, useContext, useState } from "react";

export const Datacontext=createContext(null);

export const Dataprovider=({children})=>{
    const [products,setproducts]=useState(null)

    const getproduct=async()=>{
    try{
      let res=await axios.get("https://dummyjson.com/products?limit=100")
      setproducts(res.data.products)
    }
    catch(err){
       console.log(err);
    }
  }
  const getuniqecategory=(product,property)=>{
      let newval=product?.map((item)=>item[property])
      newval=["All",...new Set(newval)]
      return newval;
    }
     let category=getuniqecategory(products,"category");
     let brand=getuniqecategory(products,"brand");

    return <Datacontext.Provider value={{products,setproducts,getproduct,category,brand}}>
     {children}
    </Datacontext.Provider>
}
 
export const Data=()=>useContext(Datacontext)