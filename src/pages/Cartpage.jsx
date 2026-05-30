
import React, { useState } from 'react'
import { Carts } from '../componnents/Cartcontext'
import { useNavigate } from 'react-router'
import { MdDelete } from "react-icons/md";

const Cartpage = ({adress,getadress}) => {
  const { Cartitem,setCartitem } = Carts();
  const navigate = useNavigate();
  const [location,setlocation]=useState([])

//  let country1="";
//  let state1="";
//  let postcode1="";
//  let city1="";
  const Detectlocation=()=>{
   let country1=adress.country;
   let state1=adress.state;
   let postcode1=adress.postcode;
   let city1=adress.city;
  setlocation({country1,state1,postcode1,city1})  
  }

 let total=0;
 let Handingcharge=5;
Cartitem.forEach((element) => {
  total=total+element.price
});

const handledelete=(idx)=>{
 const filter=Cartitem.filter((item)=>{
return item.id !==idx;
})
setCartitem(filter)
}

  return (
    <div className='min-h-screen py-5'>
      {
        Cartitem.length > 0 ? <div className=' max-w-6xl mx-auto p-5 flex flex-col justify-center gap-5'>
          <h1 className=''>Cart items ({Cartitem.length})</h1>
          {
            Cartitem?.map((items, index) => (
              <div key={index} className='max-w-5xl py-2 shadow-2xl shadow-black rounded-xl flex justify-center sm:justify-around gap-3 items-center '>
                <div className=''>
                  <img onClick={() => navigate(`/product/${items.id}`)} src={items.images} alt={items.title} className=' h-15 shadow-lg shadow-red-400 bg-lime-100 rounded-lg ' />
                </div>
                <div className=''>
                  <h1 className=' w-40 line-clamp-1 sm:line-clamp-2 sm:w-100'>{items.title}</h1>
                  <p className='text-green-500'>${items.price}</p>
                </div> 
                <div className=' flex flex-col sm:flex-row sm:gap-9 items-center'>
                <div className=' bg-yellow-300 px-2 py-1 rounded-lg flex justify-center items-center gap-2'>
                  <button onClick={()=>increase(items.id)}>+</button>
                  <span className=' text-sm'>{"1"}</span>
                  <button>-</button>
                </div>
                <button onClick={()=>handledelete(items.id)} className=' bg-red-500 px-4 sm:py-1 rounded-lg mt-2 sm:mt-0'><MdDelete className=' text-2xl text-white' /></button>
                </div>
              </div>
            ))
          }
          <div className=''>
            {/* Delevery info */}
            <div className=' max-w-5xl mx-auto bg-gray-200 rounded-lg p-3 flex flex-col gap-1'>
              <h1 className=' text-2xl font-bold'>Delivery Info</h1>
           
               <div className=' mt-3 flex flex-col gap-5'>
                <div className='flex flex-col'>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" placeholder='Enter your Name' id='name' className=' w-full rounded-md border border-gray-500 p-2 outline-0' />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input type="text" placeholder='Enter your address ' id='address' value={location.city1} className=' w-full rounded-md border border-gray-500 p-2 outline-0' />
                </div>
                <div className=' flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:gap-5'>
                  <div>
                    <label htmlFor="pincode">Pincode</label>
                    <input type="text" placeholder='Enter your pincode' value={location.postcode1} id='pincode' className=' w-full rounded-md border border-gray-500 p-2 outline-0' />
                  </div>
                  <div>
                    <label htmlFor="famous">Nearest famous place</label>
                    <input type="text" placeholder='Enter your place' id='famous' className=' w-full rounded-md border border-gray-500 p-2 outline-0' />
                  </div>
                  <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" placeholder='Enter your country' value={location.country1}  id='country' className=' w-full rounded-md border border-gray-500 p-2 outline-0' />
                  </div>
                  <div>
                    <label htmlFor="number">Number</label>
                    <input type="text" placeholder='Enter your Number ' id='number' className=' w-full rounded-md border border-gray-500 p-2 outline-0' />
                  </div>
                </div>
                <button className=' bg-red-500 hover:bg-red-400 px-2 py-1 rounded-md text-white mt-4'>Submit</button>
              </div>
              <div className=' flex flex-col mt-5'>
                <h1 className=' text-center'>---------OR---------</h1>
                <button onClick={Detectlocation} className=' bg-red-500 hover:bg-red-400 px-2 py-1 rounded-md text-white mt-2'>Detect Location</button>
              </div>
            </div>
            {/* bill details section */}
             <div className=' mt-5 max-w-5xl p-3 bg-gray-200 rounded-md'>
              <h1 className=' text-lg text-center font-bold'>-----Bill details-----</h1>
                 <div className=' grid grid-cols-2 place-items-center mt-5 '>
                     <div>
                      <p>Items total</p>
                      <p>Delivery charge</p>
                      <p>Handing charge</p>
                     </div>
                     <div>
                      <p>${Math.floor(total)}</p>
                      <p><span className=' line-through'>$10</span> <span className=' text-red-600'>FREE</span></p>
                      <p className=' text-red-600'>${Handingcharge}</p>
                     </div>
                 </div>
                 
                      <div className=' min-w-20 text-center px-4 sm:px-28'><p className=' border'></p></div>
                     <div className='grid grid-cols-2 place-items-center'>
                      <h2 className=' text-lg font-semibold text-black mr-6'>Grand total</h2>
                      <h2>{Handingcharge+Math.floor(total)}</h2>
                     </div>
                     <div className=' flex flex-col px-4 sm:px-28 mt-5'>
                      <label htmlFor="code">Apply Promo code</label>
                      <div className=' flex justify-around'>
                        <input type="text" placeholder='Enter code' id='code' className=' w-full outline-none border border-r-0 border-gray-500 rounded-l-md px-2 py-1.5' />
                        <button className=' bg-blue-600 hover:bg-blue-400 rounded-md rounded-l-none border px-1'>Apply</button>
                      </div>
                      <button className=' bg-red-500 rounded-lg p-1.5 mt-3'>Proceed to Checkout</button>
                     </div>
             </div>
          </div>
        </div> :
          <div className='h-screen flex flex-col justify-center items-center'>
            <img src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="empty item image " />
            <h1 className='text-2xl mt-20 text-red-500 hover:text-red-300'>Empty Cart</h1>
          </div>
      }
    </div>
  )
}

export default Cartpage
