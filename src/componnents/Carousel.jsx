import React, { useContext, useEffect, } from 'react'
import { SwiperSlide,Swiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import axios from 'axios';
import { Slice } from 'lucide-react';
import { Datacontext } from './Datacontext';

// https://dummyjson.com/products?limit=100

const Carousel = () => {
  // const [products,setproducts]=useState([])
  const {getproduct,products}=useContext(Datacontext)
 
  useEffect(()=>{
    getproduct();
  },[])
  console.log(products);
  
  return (
    <div className='bg-amber-400 w-full md:h-130'>
      <Swiper spaceBetween={70} breakpoints={{768:{slidesPerView:1},640:{slidesPerView:1},0:{slidesPerView:1},}} navigation={true} pagination={{clickable:true}} autoplay={{delay:800,}} modules={[Navigation,Pagination,Autoplay]}>
       {
        products?.slice(5,15)?.map((product,idx)=>(
           <SwiperSlide className=''>
          <div className='bg-blue-400 w-full md:h-130 flex flex-col md:flex-row justify-around items-center'>
             <div className='h-85 w-100 bg- flex flex-col justify-center items-center'>
              <h1 className='text-center uppercase font-bold text-purple-800 mt-3 md:text-xl text-sm'>{product.title}</h1>
              <h2 className='text-justify line-clamp-2 md:line-clamp-none text-sm font-semibold'>{product.description}</h2>
              <h2 className='text-red-800 text-lg mt-15'><span className='text-xl text-white  font-semibold'>Price:-</span>{product.price}</h2>
              <h2 className='text-red-800 text-2xl'><span className='text-xl text-blue-950  font-semibold'>Discount up To:-</span>{product.discountPercentage}%</h2>
             </div>
             <div className='w-85 h-85 shadow-2xl mb-5 md:mb-0 shadow-red-500 rounded-full flex justify-center items-center bg-blue-900'>
            <img className='h-80 w-80 bg-white rounded-full mb-3 shadow-2xl shadow-white object-cover' src={product.images[1]} alt="products" />
             </div>
          </div>
        </SwiperSlide>
        ))
       }
      </Swiper>
    </div>
  )
}

export default Carousel

{/* <div className='w-full max-w-7xl mx-auto px-10 py-5'>
      <Swiper spaceBetween={70} breakpoints={{768:{slidesPerView:2},640:{slidesPerView:1},0:{slidesPerView:1},}} navigation={true} pagination={{clickable:true}} autoplay={{delay:800,}} modules={[Navigation,Pagination,Autoplay]}>
       {
        products?.slice(5,15)?.map((product,idx)=>(
           <SwiperSlide className=''>
          <div className='text-center mb-4 shadow-lg hover:shadow-2xl hover:shadow-gray-500 rounded-2xl bg-white transition duration-500'>
            <img className='w-full h-40 sm:h-48 md:h-52 rounded-lg' src={product.images[1]} alt="products" />
             <div>
              <h1 className='text-center font-semibold mt-3 md:text-lg text-sm'>{product.title}</h1>
             </div>
          </div>
        </SwiperSlide>
        ))
       }
      </Swiper>
    </div> */}