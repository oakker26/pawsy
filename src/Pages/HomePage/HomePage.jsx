import React from 'react'

import AboutUs from '../../components/AboutUs/AboutUs';
import Blog from '../../components/Blogs/Blog';
import HeroSection from '../../components/Hero/HeroSection';
import Offer from '../../components/offer/Offer';
import Product from '../../components/Product/Product';
import Testimonials from '../../components/Testimonials/Testimonials';
import { motion } from 'framer-motion';

const HomePage = () => {
    
  return (
      <motion.div
      initial={{
        opacity: 0,
        translateY: -500,
      translateX:-500}}
      animate={{
        opacity: 1,
        translateY: 0,
        translateX:0
        , transition: { duration: 0.4 }
      }}
      exit={{ opacity: 0, translateY:500,translateX:500 ,transition:{duration:0.4}}}  >
          
      <div className=' mb-0 lg:mb-[463px]'>
      <div className='bg-[linear-gradient(180deg,#1b2963,#152154)] '>
            <div className='container relative bg-[linear-gradient(180deg,#1b2963,#152154)] px-auto '>
      <div className=" absolute top-0  right-0 hidden lg:block  z-10  ">
        <img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6135cf14fb865f16b67fcefb_Hero%20Circle.svg" alt="" />
        </div>
      
        <HeroSection />
        </div>
      </div>
      <Offer />
      <div className='bg-white'>
      <AboutUs />

      </div>
      <div className='bg-[#f6feff]'>
      <Product />

      </div>
      <div className='bg-white'>
      <Testimonials />
      </div>
      <div className='bg-[#f6feff]'>
            <Blog />
        </div>
          
        </div>
    </motion.div>
  )
}

export default HomePage