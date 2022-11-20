import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AboutHeroSection from '../../components/AboutPageSection/AboutHeroSection/AboutHeroSection'
import AboutOurCLient from '../../components/AboutPageSection/AboutOurClient/AboutOurCLient'
import AboutInfo from '../../components/AboutPageSection/AboutInfoSection/AboutInfo'
import AboutTeam from '../../components/AboutPageSection/AboutTeam/AboutTeam'
import Aboutig from '../../components/AboutPageSection/AboutIg/Aboutig'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'
const AboutPage = () => {
    return (<motion.div
        initial={{
            opacity: 0,
            clipPath:'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
            translateY: -500,
          translateX:-500}}
          animate={{
            opacity: 1,
              translateY: 0,
              clipPath:'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
            translateX:0
            , transition: { duration: 0.4 }
          }}
        exit={{ opacity: 0, translateY: 500, translateX: 500,
            clipPath: 'polygon(65% 0, 36% 0, 66% 99%, 32% 100%)' , transition: {duration:0.4
}}}  className = "" >
        <div  className='lg:mb-[480px]'>
        <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
                <div className='container'>
            <AboutHeroSection/>
                </div>
        </div>
        <div className=' bg-[linear-gradient(180deg,#ffffff,#f3fdff)]'>
        <AboutOurCLient/>
        </div>
        <AboutInfo />
            <div className='bg-[#f6feff]'>
        <AboutTeam />
            </div>
            <div>
            <Aboutig />

            </div>
        </div>

             
    </motion.div>
        
  )
}

export default AboutPage