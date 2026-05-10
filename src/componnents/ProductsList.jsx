import React from 'react'

const ProductsList = ({products}) => {
  return (
    <div className=' grid grid-cols-2 sm:grid-cols-4 gap-3 gap-y-5 h-screen overflow-y-scroll p-2'>
      {
        products.map((items,index)=>(
            <div key={index} className=' shadow-lg shadow-black'>
                <img src={items.images} alt="Image not found" />
            </div>
        ))
      }
    </div>
  )
}

export default ProductsList
