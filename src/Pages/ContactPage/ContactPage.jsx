import React from 'react'
import BlogFilter from '../../components/BlogPageSection/BlogFilter/BlogFilter'
import Footer from '../../components/Footer/Footer'
import ContactPageHero from '../../components/ContactPageSection/ContactPageHero/ContactPageHero'
import ContactPageFaq from '../../components/ContactPageSection/ContactPageFaqSection/ContactPageFaq'
import { motion } from 'framer-motion'
const ContactPage = () => {
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
          <ContactPageHero />   
          
        </div>
        <div className='bg-[#f6feff]'>
          <ContactPageFaq/>
        </div>
    </div>
       
</motion.div>
  )
}

export default ContactPage