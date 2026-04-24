import React from 'react'
import { NavLink ,Link } from 'react-router'
import { IoClose } from "react-icons/io5";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

const Menubar = () => {
  return (
    
    <div className='bg-white text-black fixed top-0 h-screen w-full'>
      <nav className='flex flex-col justify-between relative'>
        <Link to={"/"}><IoClose className='absolute right-2 top-2 size-7'/></Link>
        <div className='ml-5 mt-2'>
              <Show when="signed-out">
                <SignInButton className="bg-blue-500 px-2 pb-1 rounded-lg text-center" />
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
        <ul className='mt-6 ml-5 font-bold'>
              <NavLink to={"/"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black hover:text-red-500 hover:text-lg"}`}><li>Home</li></NavLink>
              <NavLink to={"/Product"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black hover:text-red-500 hover:text-lg"}`}><li>Products</li></NavLink>
              <NavLink to={"/About"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black hover:text-red-500 hover:text-lg"}`}><li>About</li></NavLink>
              <NavLink to={"/Contact"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black hover:text-red-500 hover:text-lg"}`}><li>Contact</li></NavLink>
            </ul>
      </nav>
    </div>
  )
}

export default Menubar
