import React, { useEffect } from 'react'
import { SwiperSlide,Swiper} from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Carousel from '../componnents/Carousel';
import PromoSection from '../componnents/Promosection';
import { Data } from '../componnents/Datacontext';

const Home = () => {
const {getproduct,products}=Data()
useEffect(()=>{
  getproduct();
})
  return (

    <>
    {
    products?<div className='mt-2'>
      <Carousel/>
      <PromoSection/>
    </div>:<div className=' w-full h-screen flex items-center justify-center'><img src="https://i.pinimg.com/originals/f6/65/6a/f6656aa6fdb6b8f905dea0bcc2d71dd8.gif" alt="Loading..." /></div>
  }
    </>
  )
}

export default Home
