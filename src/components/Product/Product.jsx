import React from 'react'
import { Link } from 'react-router-dom'
import ProductCards from './ProductCards'

const Product = () => {
  
  return (
      <div className='container bg-[#f6feff] lg:py-32 py-20'>
          <div className='flex flex-col lg:flex-row lg:justify-between justify-start items-center '>
              <div>
              <div className='flex items-center  space-x-2 mb-4 '>
                  <div className='w-10 h-[2px]  bg-[#1ba0ab] '> </div>
                  <div className='text-[#1ba0ab] leading-7'>Products</div>
                  </div>
                  <h1 className='md:text-5xl text-3xl font-bold'>Shop online and <span className='text-[#7d90e0]'>get 10% off</span></h1>
              </div>
              <div>
                  <Link to="/products" className='PrimaryOutlineBtn hover:scale-110 duration-500 w-full lg:w-auto '> All Products</Link>
              </div>
          </div>
          <ProductCards/>
    </div>
  )
}

export default Product
