import React from 'react'
import Cards from '../AboutPageSection/AboutTeam/Cards'
import ProductCards from '../Product/ProductCards'
const ProductPageOff = () => {
  return (
    <div className='text-center bg-[#f6feff] py-32'>
      <h1 className='text-5xl text-[#1b2963] font-bold'>
      Shop online and<span className='text-[#7d90e0]'>get 10% off</span>
      </h1>
      <div className=' container'>
        <ProductCards/>

      </div>
    </div>
    
  )
}

export default ProductPageOff