
import React from 'react'
import { NavLink } from 'react-router'

const Mobilemenu = () => {
  return (
    <div className='h-10 w-full md:hidden fixed bottom-0 flex justify-center items-center shadow-2xl shadow-gray-950'>
      <nav className='mt-6 h-8 w-full'>
        <ul className='flex justify-between items-center ml-5 mr-5 text-sm'>
              <NavLink to={"/"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>Home</li></NavLink>
              <NavLink to={"/Product"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>Products</li></NavLink>
              <NavLink to={"/About"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>About</li></NavLink>
              <NavLink to={"/Contact"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>Contact</li></NavLink>
            </ul>
      </nav>
    </div>
  )
}

export default Mobilemenu
