import React, { useState } from 'react'
import ProductOneDes from './ProductOneDes'
import { useDispatch } from 'react-redux'
import '../Products.css'
import { useRef } from 'react'
import { increaseItem } from '../../../feature/cart/cartSlice'
// import {productImg } from "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/613f20f438e04d7ea0a64249_Product%20Image%20Small.png"
const ProductOneHero = ({ id, amount }) => {
  const ref=useRef()
  
  const dispatch=useDispatch()
  const clickHandler = () => {
    ref.current.classList.add('send-to-cart')
    setTimeout(() => {
      ref.current.classList.remove('send-to-cart')      
    },1000)
    
  }
  return (
     <div className="  mb-8 md:mb-20 md:container pl-4 md:pl-0  md:pr-0 ">
      <div className="flex-col  items-end  ">
        <div className="  w-[100%] mb-[-237px] rounded-2xl">
          <div className=" rounded-2xl  md:container md:pr-0 ">
                      <div className="grid grid-rows-1 p-10  bg-white rounded-2xl lg:grid-cols-1  ">
                          <div className='grid grid-cols-12    mt-5 md:gap-x-10  '>
                              <div className='p-2 relative border col-span-12 lg:col-span-5 flex justify-center items-center rounded-2xl'>
                              <img ref={ref} className='cart-item ' src="https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/613f20f438e04d7ea0a64249_Product%20Image%20Small.png" alt="" />
                                  <img  className='absolute bottom-5 right-5' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/613e1918ad5deae27def8d68_arrows-diagonals%201.svg" alt="" />
                              </div>
                              <div className='col-span-12 lg:col-span-7 mt-12 lg:mt-0'>
                                  <h1 className='md:text-5xl text-2xl font-bold  text-[#1b2963]'>Premium Dog Food 1</h1>
                                  <p className=' font-[monsarret] mt-5 mb-8'>Available In Stock: <span className='text-[#1ba0ab]'>100 Items</span> </p>
                                  <h2 className='text-[#1b2963] text-3xl w-full md:w-auto text-center md:text-start font-bold p-6 bg-[#f9f9f9] inline-block rounded-2xl '>$ 24.00 USD <span className='text-xl line-through block md:inline'> $ 28.40 USD</span></h2>
                                  <div className=' flex md:flex-row flex-col items-center'>
                                      <div className='mt-8 mr-6'>
                                      <label htmlFor="number"></label>
                                      <input type="number" className=' bg-[#fafafa] w-full px-4 h-14 md:w-20 font-[monsarret] rounded-xl border' />
                                      </div>
                                      <button className='primaryBtn' onClick={clickHandler} >Add to Cart</button>
                                  </div>
                              </div>
                          </div>
                      <ProductOneDes/>
                          
                      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOneHero