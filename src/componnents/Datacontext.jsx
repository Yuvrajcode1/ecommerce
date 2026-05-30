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
// nnnnnnnnnn
     const [searchval,setsearchval]=useState('')
     const [category1,setcategory1]=useState('All')
     const [brand1,setbrand1]=useState('All')
     const [pricerange,setpricerange]=useState([0,1000])
      
     
// nnnnnnnnnnn
    return <Datacontext.Provider value={{products,setproducts,getproduct,category,brand,searchval,setsearchval,category1,setcategory1,brand1,setbrand1,pricerange,setpricerange}}>
     {children}
    </Datacontext.Provider>
}
 
export const Data=()=>useContext(Datacontext)