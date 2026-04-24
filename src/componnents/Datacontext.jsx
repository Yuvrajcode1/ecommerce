import axios from 'axios';
import { createContext, useState } from "react";

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

    return <Datacontext.Provider value={{products,setproducts,getproduct}}>
     {children}
    </Datacontext.Provider>
}