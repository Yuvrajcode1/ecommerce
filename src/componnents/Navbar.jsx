import { MapPin } from 'lucide-react';
import { IoMdArrowDropdown, IoMdClose,IoIosMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
// import { SignedOut } from '@clerk/clerk-react';


const Navbar = ({ adress,getadress,locationpopup,setlocationpopup }) => {
  // const [locationpopup, setlocationpopup] = useState(false)

  function popup() {
    setlocationpopup(!locationpopup)
  }
  return (
    <>
      <div className='max-w-full h-8 bg-white'>
        {/* navbar area */}
        <div className='fixed z-10 bg-white shadow-2xl shadow-black h-9 w-full flex justify-between items-center px-3 py-5'>
          <div className='flex gap-12 justify-between items-center'>
            <Link to="/"><h1 className='text-xl font-serif ml-4 text-blue-500'><span className='text-red-600 font-semibold text-3xl'>Y</span>uvraj</h1></Link>
            {/* map and adress */}
            <div className='hidden md:flex justify-center items-center ml-3 relative'>
              <MapPin className='text-red-700 size-5' />
              <span className='flex flex-col gap-1'>
                {adress ? <div className='-space-y-2 text-center'><p>{adress.state}</p><p>{adress.county}</p></div> : "Loading.."}
              </span>
              <IoMdArrowDropdown onClick={popup} className='size-5 mt-1' />

              {/* dropdown box for location  */}
              {
                locationpopup ? <div className='w-50 h-20 shadow-2xl shadow-black absolute top-5 right-0.5 bg-white flex flex-col items-center justify-around rounded-lg z-2'>
                  <IoMdClose onClick={popup} className='absolute top-1 right-1' />
                  <h1 className='text-md font-semibold'>Change Location</h1>
                  <button onClick={getadress} className='bg-blue-600 text-white font-serif px-2 pb-0.5 rounded-lg text-center'>Detect my location</button>
                </div> : null
              }
            </div>
          </div>
          {/* products pages */}
          <nav className='flex justify-center items-center gap-7'>
            <ul className='hidden md:flex gap-7 justify-center items-center '>
              <NavLink to={"/"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>Home</li></NavLink>
              <NavLink to={"/Product"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>Products</li></NavLink>
              <NavLink to={"/About"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>About</li></NavLink>
              <NavLink to={"/Contact"} className={({ isActive }) => `${isActive ? "border-b-2 border-red-600 font-bold" : "text-black"}`}><li>Contact</li></NavLink>
            </ul>
            {/* cart icon */}
            <div className='flex relative'>
              <Link>
                <FaShoppingCart className='size-4.5' />
                <span className='absolute -top-2 left-4.5 font-bold text-sm  text-red-700 '>{"3"}</span>
              </Link>
            </div>
            {/* sign in button */}
            <div className=''>
              <Show when="signed-out">
                <SignInButton className="bg-blue-500 px-2 pb-1 rounded-lg text-center"/>
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
            {/* <Link to={"/Menubar"}><IoIosMenu className='size-6 md:hidden' /></Link> */}
          </nav>
        </div>
      </div>
      {/* <div className='flex gap-7 justify-center items-center mr-3 '>
               <Link to="/Home" className={({isAct})}>Home</Link>
               <Link to="/Product">Products</Link>
               <Link to="/About">About</Link>
               <Link to="/Contact">Contact</Link> */}
    </>

  )
}

export default Navbar;
