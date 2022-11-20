import React from 'react'
import TeamPageHero from '../../components/TeamPageSections/TeamPageHero'
import TeamPageTrusted from '../../components/TeamPageSections/TeamPageTrusted'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'
const TeamPage = () => {
  return (
    <motion.div  initial={{
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
    <div className='lg:mb-[480px]'>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <div className='container'>
            <TeamPageHero />
          </div>
          
        </div>
        <TeamPageTrusted/>
        
    
    </div>
</motion.div>
    
  )
}

export default TeamPage