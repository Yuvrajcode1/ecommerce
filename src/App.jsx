import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./componnents/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Menubar from "./componnents/Menubar";
import Mobilemenu from "./componnents/Mobilemenu";

const App = () => {
const [adress,setadress]=useState()
const [locationpopup, setlocationpopup] = useState(false)

const getadress=async()=>{
navigator.geolocation.getCurrentPosition(async pos=>{
const {latitude,longitude}=pos.coords
console.log(latitude,longitude);

const url=`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
try{
  const location=await axios.get(url)
  const getlocation=location.data.address;
  setadress(getlocation)
  setlocationpopup(false)
}
catch(err){
  console.log(err);
}
})
}
useEffect(()=>{
  getadress();
},[])
console.log(adress)
  return (
    <>
      {/* Navbar div */}
      <div>
          <Navbar adress={adress} getadress={getadress} locationpopup={locationpopup} setlocationpopup={setlocationpopup}/>
      </div>

      {/* pages div */}
      <div>
          <Routes>
            <Route path="/"element={<Home/>}></Route>
            <Route path="/Product"element={<Product/>}></Route>
            <Route path="/About"element={<About/>}></Route>
            <Route path="/Contact"element={<Contact/>}></Route>
            <Route path="/Menubar" element={<Menubar/>}></Route>
          </Routes>
      </div>

      <div className="">
       <Mobilemenu/>
      </div>
    </>
  )
}
export default App;