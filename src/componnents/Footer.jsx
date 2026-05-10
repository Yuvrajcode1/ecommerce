import { Link } from "react-router"
import { Data } from "./Datacontext"
import { useEffect } from "react"
const Footer = () => {
  const {getproduct,products}=Data()
  useEffect(()=>{
    getproduct();
  })
  return (
    <>
    {
   products?<footer className="bg-black text-white py-10 ">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <h1 className="text-3xl font-bold text-red-500">
            Salva
          </h1>

          <p className="text-gray-300 mt-4 leading-6 text-sm">
            Salva is a modern ecommerce website built for a
            smooth and stylish shopping experience with
            responsive UI and quality products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-red-400 cursor-pointer transition-all">
             <Link to="/">Home</Link> 
            </li>

            <li className="hover:text-red-400 cursor-pointer transition-all">
              <Link to="/Product">Products</Link>
            </li>

            <li className="hover:text-red-400 cursor-pointer transition-all">
              <Link to="/About">About</Link>
            </li>

            <li className="hover:text-red-400 cursor-pointer transition-all">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Contact Info
          </h2>

          <p className="text-gray-300 text-sm">
            Email
          </p>

          <p className="text-red-400 break-all">
            yuvraj70@gmail.com
          </p>

          <p className="text-gray-300 text-sm mt-5">
            Author
          </p>

          <p className="text-red-400">
            Yuvraj Singh
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-400">
        © 2026 Salva. All Rights Reserved.
      </div>
    </footer>:null
    }
    </>
  )
}

export default Footer