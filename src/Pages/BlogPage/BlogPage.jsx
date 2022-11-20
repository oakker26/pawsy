import React, { useEffect, useState } from 'react'
import BlogFilter from '../../components/BlogPageSection/BlogFilter/BlogFilter';
import BlogPageHero from '../../components/BlogPageSection/BlogPageHero';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/Footer';
const BlogPage = () => {

  // const [all, setAll] = useState(data);
  
  // useEffect(() => {
    
  // }, [all])
 
  return (
    <motion.div   initial={{
      opacity: 0,
      translateY: -500,
    translateX:-500}}
    animate={{
      opacity: 1,
      translateY: 0,
      translateX:0
      , transition: { duration: 0.4 }
    }}
    exit={{ opacity: 0, translateY:500,translateX:500 ,transition:{duration:0.4}}} className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <div className='  md:container'>
            <BlogPageHero/>
          </div>
          
        </div>
        <div className='bg-[#f6feff'>
        <BlogFilter/>

        </div>
    
    </div>

       
</motion.div>
  )
}

export default BlogPage