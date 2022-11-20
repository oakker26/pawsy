import React from 'react'
import Footer from '../../../components/Footer/Footer'
import GroomingFooter from './GroomingFooter'
import MitchellyTorphyFooter from '../../MemberNestedPage/MitchellTorphy/MitchellyTorphyFooter'
import GroomingDes from './GroomingDes'
import GroomingHero from './GroomingHero'
const Grooming = () => {
  return (
    <div className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <GroomingHero />   
          
        </div>
        <div className=' bg-[#f6feff]'>
          <GroomingDes/>
        </div>
        <div className='bg-[#f6feff]'>
          <GroomingFooter/>
        </div>
    </div>
     
</div>
  )
}

export default Grooming