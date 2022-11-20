import React from 'react'
import Footer from '../../../components/Footer/Footer'
import HealthTwoHero from './HealthTwoHero'
import HealthTwoDes from './HealthTwoDes'
import HealthTwoFooter from './HealthTwoFooter'
const HealthTwo = () => {
  return (
    <div className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <HealthTwoHero />   
          
        </div>
        <div className=' bg-[#f6feff]'>
          <HealthTwoDes/>
        </div>
        <div className='bg-[#f6feff]'>
          <HealthTwoFooter/>
        </div>
    </div>
       
</div>
  )
}

export default HealthTwo