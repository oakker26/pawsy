import React from 'react'
import Footer from '../../../components/Footer/Footer'
import MitchellyTorphyHero from './MitchellyTorphyHero'
import MitchellyTorphyFooter from './MitchellyTorphyFooter'
const MitchellyTorphy = () => {
  return (
    <div className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <MitchellyTorphyHero />   
          
        </div>
        <div className=' bg-[#f6feff]'>
          <MitchellyTorphyFooter/>
        </div>
    </div>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)] lg:container px-0'>
    <Footer/>
    </div>        
</div>
  )
}

export default MitchellyTorphy