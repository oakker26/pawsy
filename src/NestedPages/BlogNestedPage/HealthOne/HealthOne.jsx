import React from 'react'
import Footer from '../../../components/Footer/Footer'

import HealthOneHero from './HealthOneHero'
import HealthOneDes from './HealthOneDes'
import HealthOneFooter from './HealthOneFooter'
const HealthOne = () => {
  return (
    <div className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <HealthOneHero />   
          
        </div>
        <div className=' bg-[#f6feff]'>
          <HealthOneDes/>
        </div>
        <div className='bg-[#f6feff]'>
          <HealthOneFooter/>
        </div>
    </div>
          
</div>
  )
}

export default HealthOne