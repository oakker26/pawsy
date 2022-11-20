import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { store } from '../../../store/store'
import { motion } from 'framer-motion'
const CartContainer = () => {
    const {cartItems, total, amount}= useSelector((store)=>store.cart)
    if (amount < 1) {
        return <section><div className=' md:py-24 grid justify-center place-content-center grid-cols-1 '>
        <div className='text-[18px] text-center place-items-center font-normal'>There are not items in your cart. <br /></div>
            <div className=' place-self-center place-items-center '>
              <button className='primaryBtn  shadow-[0_15px_30px_0_rgb(127 107 255 / 30%)] '>Back To Products</button>
              </div>
          </div>
          
            
        </section>
    }
  return (
  
      <motion.div
      initial={{ scale: 0 }}
        animate={{
          scale: 1,
      transition:{duration:0.3}  }}
        exit={{
          scale: 0,
        transition:{duration:0.3}}}
      className='md:rounded-2xl  duration-300 ease-in-out bg-white w-screen h-screen md:w-[480px]  overflow-y-scroll'>
        <div className='flex rounded-t-2xl md-px-6 md-py-4 lg:py-4 lg:px-6 justify-between items-center  border-b bg-[#f9f9f9] '>
          
        <h1 className='font-semibold text-2xl text-[#1b2963] '>Your Cart</h1>
        <div>
          <img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/613881d814dddef90d0bad15_circle-x%201.svg" alt="" />
        </div>
      </div>
      <div className=' grid justify-center place-content-center grid-cols-1 '>
      {cartItems.map((item)=><CartItem key={item.id} img={item.img} title={item.title} price={item.price} link={item.link} />)}

          
      </div>
      <footer>
        
      </footer>
        
      </motion.div>
  )
}

export default CartContainer