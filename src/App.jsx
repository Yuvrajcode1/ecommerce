import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./componnents/Navbar";
import { Fragment, use, useEffect, useState } from "react";
import axios from "axios";
import Mobilemenu from "./componnents/Mobilemenu";
import Footer from "./componnents/Footer";
import ProductNavebar from "./componnents/ProductNavebar";
import Singlepage from "./componnents/Singlepage";
import Cartpage from "./pages/Cartpage";

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
const location=useLocation();
  return (
    <Fragment className=" overflow-hidden">
      {/* Navbar div */}
      <div>
        {
      location.pathname==="/Product"?<ProductNavebar/>:
          <Navbar adress={adress} getadress={getadress} locationpopup={locationpopup} setlocationpopup={setlocationpopup}/>
        }
      </div>

      {/* pages div */}
      <div className="">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Product" element={<Product/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            {/* <Route path="/Menubar" element={<Menubar/>} /> */}
            <Route path="/product/:id" element={<Singlepage/>}/>
            <Route path="/Cart" element={<Cartpage adress={adress} getadress={getadress} />}/>
          </Routes>
      </div>
      <Footer/>
      <div className="">
       <Mobilemenu/>
      </div>
    </Fragment>
  )
}
export default App;