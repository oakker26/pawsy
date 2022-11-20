import React from 'react'
import Footer from '../../components/Footer/Footer'
import ProductPageHero from '../../components/ProductPageSection/ProductPageHero'
import ProductPageOff from '../../components/ProductPageSection/ProductPageOff'
import { Link,Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
const ProductPage = () => {
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
      exit={{ opacity: 0, translateY:500,translateX:500 ,transition:{duration:0.4}}}  className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <div className='  md:container'>
            <ProductPageHero/>
          </div>
          
        </div>
        <ProductPageOff/>
        <Outlet/>
    </div>

       
</motion.div>
  )
}

export default ProductPage