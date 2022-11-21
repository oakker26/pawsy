import React from 'react'
import Navbar from '../Navbar/Navbar'
import { AiOutlineRight } from 'react-icons/ai'


const ProductPageHero = () => {
  return (
      <div className=' h-[460px] md:h-[360px] relative'>
          <div className='flex md:flex-row flex-col justify-between items-center mt-0 lg:pt-36'>
              <h1 className='text-3xl lg:text-5xl font-semibold text-white my-10  '>Our <span className='text-[#7d90e0]'>Products</span></h1>
              <div className='flex justify-center p-4 text-white bg-[#ffffff22] rounded-full items-center'>
                  <h1 >Home</h1>
                  <AiOutlineRight className='font-bold mx-1 opacity-50' />
                  <p className='opacity-50'>Products</p>
              </div>
              
          </div>
          <div className='hidden md:block'>
                  <img className='absolute -left-12 top-0 ' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/61388986d2ea57b356056095_Inner%20Hero%20Circle%20Small.svg" alt="" />
              <img className='absolute -right-12 top-0' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/613889795ccfd376f2f0979a_Inner%20Hero%20Circle%20Big.svg" alt="" />
              </div>
    </div>
  )
}

export default ProductPageHero