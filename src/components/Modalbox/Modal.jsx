import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
 import CartContainer from './Carts/CartContainer'
const Modal = ({ show, onClose }) => {

  let handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  
  }
  if (!show) return null;

  return (
    <AnimatePresence>
       <motion.div
      initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
      transition:{duration:0.3}  }}
        exit={{
          opacity: 0,
        transition:{duration:0.3}}}
        id='container' onClick={handleOnClose} className='bg-[rgba(0,0,0,.3)] w-full h-full inset-0 z-50 animate-[wiggle_1s_ease-in-out_infinite] backdrop-blur-sm  !flex !justify-center !items-center fixed'>
        <div>
       <CartContainer/>
          </div>
    </motion.div>
   </AnimatePresence>
  )
}

export default Modal